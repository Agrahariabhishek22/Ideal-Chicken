import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  Bird,
  Drumstick,
  Scissors,
  Package,
} from "lucide-react";

// --- MOCK DATA (Replace this with your CMS API response) ---
const CATEGORIES = [
  {
    id: "all",
    label: "All Products",
    // Grid Icon
    icon: LayoutGrid,
  },
  {
    id: "whole",
    label: "Whole Birds",
    // Tumhara wala Bird SVG (Optimized with currentColor)
    icon: "/src/assets/Vector7.png",
  },
  {
    id: "fresh-cuts",
    label: "Fresh Chicken Cuts",
    icon: "/src/assets/Vector (9).png",
  },
  {
    id: "special",
    label: "Chicken Special Cuts",
    // Drumstick Icon
    icon: "/src/assets/Vector (10).png",
  },
  {
    id: "giblets",
    label: "Chicken Giblets",
    // Package Icon
    icon: "/src/assets/Vector (8).png",
  },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Chicken Breast Boneless",
    slug: "chicken-breast-boneless",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (5).png", // Replace with real URL
  },
  {
    id: 2,
    title: "Boneless Supreme",
    slug: "boneless-supreme",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (5).png",
  },
  {
    id: 3,
    title: "Chicken Lollypop",
    slug: "chicken-lollypop",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (6).png",
  },
  {
    id: 4,
    title: "Mince",
    slug: "mince",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (7).png",
  },
  {
    id: 5,
    title: "Hot Wings",
    slug: "hot-wings",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (8).png",
  },
  // ... CMS se aur data ayega, ye pagination test karne ke liye duplicates hain:
  {
    id: 6,
    title: "Chicken Drumsticks",
    slug: "drumsticks",
    category: "fresh-cuts",
    categoryLabel: "Fresh Chicken Cuts",
    shortDescription:
      "Juicy and tender drumsticks perfect for grilling or frying.",
    image: "/src/assets/Rectangle 2 (6).png",
  },
  {
    id: 7,
    title: "Whole Chicken (Skinless)",
    slug: "whole-chicken-skinless",
    category: "whole",
    categoryLabel: "Whole Birds",
    shortDescription:
      "Full chicken without skin, ideal for curries and roasts.",
    image: "/src/assets/Rectangle 2 (8).png",
  },
  {
    id: 8,
    title: "Chicken Liver",
    slug: "chicken-liver",
    category: "giblets",
    categoryLabel: "Chicken Giblets",
    shortDescription: "Nutrient-rich chicken liver, fresh and clean.",
    image: "/src/assets/Rectangle 2 (6).png",
  },
  {
    id: 9,
    title: "Chicken Thighs",
    slug: "chicken-thighs",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription: "Flavorful dark meat cuts, excellent for slow cooking.",
    image: "/src/assets/Rectangle 2 (7).png",
  },
  {
    id: 10,
    title: "Mince",
    slug: "mince",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (8).png",
  },
  {
    id: 11,
    title: "Chicken Lollypop",
    slug: "chicken-lollypop",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (6).png",
  },
  {
    id: 12,
    title: "Chicken Lollypop",
    slug: "chicken-lollypop",
    category: "special",
    categoryLabel: "Chicken Special Cuts",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/src/assets/Rectangle 2 (6).png",
  },
];

// --- COMPONENTS ---

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("special");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // --- LOGIC: Filter & Pagination (Move this to backend if dataset is huge) ---
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [currentPage, filteredProducts]);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  return (
    <section className="relative w-full bg-[#FEFEFE] min-h-screen px-4 py-8 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* --- HEADER: Filters & Search --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* Categories Tab */}
          {/* 'Categories' Label Icon */}
          <div className="flex items-center gap-2 text-[#6B788E] font-medium text-sm tracking-wide px-2 shrink-0">
            <img
              src="/src/assets/Vector (11).png"
              className="w-4 h-4 text-[#A71077]"
              alt=""
            />
            <span>Categories</span>
          </div>

          {/* Vertical Divider */}
          <div className="h-14 w-px bg-gray-300 hidden md:block shrink-0"></div>
          <nav
            aria-label="Product Categories"
            className="flex items-center gap-4 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 scrollbar-hide"
          >
            {/* Tabs */}
            <div className="flex items-center gap-3">
              {CATEGORIES.slice(1).map((cat) => {
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;
                // console.log(cat.icon);

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 whitespace-nowrap shrink-0 mb-1 ml-1 mr-1
                      ${
                        isActive
                          ? "bg-[#A71077] text-[#FEFEFE] shadow-md transform scale-103"
                          : "bg-[#F7F7F7] text-[#595959] border border-[#F0F0F0] hover:bg-gray-50 hover:shadow-sm"
                      }
                    `}
                  >
                    <img
                      src={cat.icon}
                      alt={cat.label}
                      className={`w-4 h-4 object-contain ${
                        isActive ? "brightness-0 invert" : ""
                      }`}
                    />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative w-full mb-2 xl:w-[320px] group">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FEFEFE] rounded-full py-3 pl-12 pr-4 text-base font-semibold text-[#1F1F1F] outline-none border border-[#F0F0F0] focus:border-[#A71077]/30 transition-all shadow-sm group-hover:shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A71077]" />
          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* --- PAGINATION --- */}
        {filteredProducts.length > itemsPerPage && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white text-[#A71077] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                  w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center transition-all duration-300
                  ${
                    currentPage === page
                      ? "bg-[#A71077] text-white shadow-md scale-110"
                      : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                  }
                `}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white text-[#A71077] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// --- SUB COMPONENT: Product Card ---
const ProductCard = ({ product }) => {
  return (
    <article
      className="relative mt group flex flex-col gap-4 cursor-pointer"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] w-full">
        <img
          src={product.image}
          alt={product.title}
          itemProp="image"
          className="w-full h-full shadow-sm object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Optional Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-start  gap-2">
        {/* Category Pill */}
        <span className="bg-[#F6E7F1] text-[#A71077] text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full  tracking-wide">
          {product.categoryLabel}
        </span>

        {/* Title */}
        <h3
          itemProp="name"
          className="text-xl md:text-[20px] font-semibold text-[#770B54] leading-tight group-hover:text-[#A71077] transition-colors"
        >
          {product.title}
        </h3>

        {/* Description */}
        <p
          itemProp="description"
          className="text-sm font-medium text-[#595959] leading-relaxed line-clamp-2"
        >
          {product.shortDescription}
        </p>

        {/* CTA */}
        <button
          className="mb-6 mt-4 relative bottom-0 flex items-center gap-3 text-sm font-semibold text-[#1F1F1F] group/btn"
          aria-label={`Contact us about ${product.title}`}
        >
          Contact Us
          <span className="bg-[#BFBFBF]  rounded-full p-0.5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-[#A71077] text-white">
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </article>
  );
};
