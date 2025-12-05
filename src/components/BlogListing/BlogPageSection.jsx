import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const BlogListing = () => {
  // --- STATE MANAGEMENT ---
  const [activeCategory, setActiveCategory] = useState("View All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sorting State
  const [sortOption, setSortOption] = useState("Most Recent"); // Default sort
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
  const dropdownRef = useRef(null); // Click outside close karne ke liye

  const itemsPerPage = 8;

  // --- CONFIGURATION & DATA ---
  const categories = [
    "View All", "Insights", "Product Stories", "Sustainability", "Innovation", "Quality"
  ];

  const sortOptions = [
    { label: "Most Recent", value: "Most Recent" },
    { label: "Oldest First", value: "Oldest First" },
    { label: "By Title (A-Z)", value: "Alphabetical" }
  ];

  // Base Data (Added 'isoDate' for accurate sorting logic)
  const baseData = [
    {
      id: 1,
      category: "Insights",
      date: "Oct 25",
      isoDate: "2025-10-25", // Sorting ke liye
      title: "The Rising Demand for Processed Poultry in India",
      description: "With shifting consumer lifestyles, processed poultry products are becoming a staple in urban kitchens.",
      image: "/Rectangle 2.png",
    },
    {
      id: 2,
      category: "Product Stories",
      date: "Oct 20",
      isoDate: "2025-10-20",
      title: "Inside Our New Line of Ready-to-Cook Chicken Cuts",
      description: "Discover how our latest range of hygienically packed chicken cuts is redefining convenience.",
      image: "/Rectangle 2 (1).png",
    },
    {
      id: 3,
      category: "Sustainability",
      date: "Oct 15",
      isoDate: "2025-10-15",
      title: "Building a Greener Supply Chain: Goals for 2026",
      description: "From waste reduction to energy-efficient cold chains, we're making sustainability measurable.",
      image: "/Rectangle 2 (2).png",
    },
    {
      id: 4,
      category: "Innovation",
      date: "Sep 28",
      isoDate: "2025-09-28",
      title: "Smart Feed: How Technology is Transforming Poultry Nutrition",
      description: "Learn how AI-driven analytics and precision feeding are improving flock health.",
      image: "/Rectangle 2 (3).png",
    },
    {
      id: 5,
      category: "Quality",
      date: "Sep 25",
      isoDate: "2025-09-25",
      title: "The Science Behind Our Quality Assurance Process",
      description: "A behind-the-scenes look at how every batch is tested, verified, and certified.",
      image: "/Rectangle 2 (4).png",
    },
    {
      id: 6,
      category: "Insights",
      date: "Sep 10",
      isoDate: "2025-09-10",
      title: "Market Insights: India's Growing Appetite for Protein",
      description: "Rising health consciousness is fueling a protein revolution.",
      image: "/Rectangle 2 (5).png",
    },
    {
      id: 7,
      category: "Sustainability",
      date: "Aug 25",
      isoDate: "2025-08-25",
      title: "Turning Poultry Waste into Renewable Energy",
      description: "Innovative waste-to-energy systems are helping farms cut emissions.",
      image: "/Rectangle 2 (6).png",
    },
    {
      id: 8,
      category: "Innovation",
      date: "Jul 25",
      isoDate: "2025-07-25",
      title: "How Automation is Reshaping Poultry Processing Plants",
      description: "From robotic handling to smart sensors, discover how automation is improving efficiency.",
      image: "/Rectangle 2 (3).png",
    },
  ];

  // --- DATA GENERATION (Extended for Demo) ---
  // Note: Randomizing dates slightly for demo sorting to be visible
  const allBlogPosts = Array.from({ length: 32 }).map((_, index) => {
    const baseItem = baseData[index % baseData.length];
    return {
      ...baseItem,
      id: index,
      title: `${baseItem.title} ${index > 7 ? `(${index})` : ''}`, 
      // Cloning logic ke liye ID change kar rahe hain, data same rakh rahe hain
    };
  });

  // --- LOGIC: FILTERING ---
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = activeCategory === "View All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- LOGIC: SORTING (NEW ADDITION) ---
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === "Most Recent") {
      return new Date(b.isoDate) - new Date(a.isoDate); // Descending Date
    } else if (sortOption === "Oldest First") {
      return new Date(a.isoDate) - new Date(b.isoDate); // Ascending Date
    } else if (sortOption === "Alphabetical") {
      return a.title.localeCompare(b.title); // A-Z Title
    }
    return 0;
  });

  // --- LOGIC: PAGINATION ---
  const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPosts.slice(indexOfFirstItem, indexOfLastItem);

  // --- HANDLERS ---
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
    setCurrentPage(1); // Reset to page 1 on sort change
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      scrollToTop();
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="min-h-screen font-sans py-10 ">

      <div className="w-full max-w-[1450px] mx-auto px-6">

        {/* --- Top Controls --- */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 relative z-20">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-[1100px] md:flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-700">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-pink-200 outline-none text-black font-medium"
            />
          </div>

          {/* --- CUSTOM DROPDOWN (NEW) --- */}
          <div className="relative w-full max-w-[300px]" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full bg-white px-6 py-3 rounded-full shadow-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-gray-400 font-normal text-xs uppercase tracking-wider">Sort by:</span>
                {sortOption}
              </span>
              <ChevronDown 
                size={18} 
                className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSortChange(opt.value)}
                    className={`w-full text-left px-6 py-3 text-sm font-medium flex items-center justify-between hover:bg-pink-50 transition-colors
                      ${sortOption === opt.value ? 'text-pink-700 bg-pink-50/50' : 'text-gray-600'}
                    `}
                  >
                    {opt.label}
                    {sortOption === opt.value && <Check size={16} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- Filter Tabs --- */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm
                ${activeCategory === cat
                  ? 'bg-[#be185d] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Blog Grid --- */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {currentItems.map((post) => (
              <div key={post.id} className="flex flex-col h-full group cursor-pointer bg-transparent">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl mb-4 h-[220px] shadow-sm bg-gray-200 relative">
                   <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-500">{post.category}</span>
                  <span className="text-[8px] text-gray-400">●</span>
                  <span className="text-xs font-bold text-gray-500">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#770B54] text-xl font-bold leading-tight mb-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-gray-900 font-bold text-sm">Read More</span>
                  <div className=" rounded-full p-0.5 group-hover:bg-pink-500 transition-colors">
                    <ChevronRight size={14} className="group-hover:text-white text-gray-900 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No posts found matching "{searchQuery}".</p>
          </div>
        )}

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="bg-white rounded-lg shadow-sm flex items-center p-1 divide-x divide-gray-100">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-l-md
                  ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Generate Page Numbers Dynamically */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-bold transition-colors
                    ${currentPage === number
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-r-md
                  ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogListing;