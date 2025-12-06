import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

// --- MOCK API DATA (Backend se aisa structure aana chahiye) ---
const MOCK_ALBUMS = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title:
    i % 2 === 0 ? "Organic Farm Visit 2024" : "Processing Unit Inauguration",
  category: i % 3 === 0 ? "farms" : i % 3 === 1 ? "processing" : "retail",
  categoryLabel: i % 3 === 0 ? "Farms" : i % 3 === 1 ? "Processing" : "Retail",
  date: "2024-10-20",
  // Cluster me dikhane ke liye aur slider ke liye images array
  images: [
    `/Rectangle 2 (${i + 17}).png`,
    `/Rectangle 3 (${i + 2}).png`,
    `/Rectangle 4 (${i + 1}).png`,
    `/Rectangle 2 (${i + 16}).png`, // Ye card pe nahi dikhegi, bas modal me
    `/Rectangle 3 (${i + 2}).png`,
  ],
}));

const CATEGORIES = [
  { id: "all", label: "View All" },
  { id: "farms", label: "Farms" },
  { id: "processing", label: "Processing" },
  { id: "retail", label: "Retail" },
  { id: "products", label: "Products" },
  { id: "events", label: "Events" },
];

export default function PhotoGallery() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  // ... purani states (albums, activeTab, currentPage etc.)
  const [sortOption, setSortOption] = useState("recent"); // 'recent' | 'oldest' | 'az'
  const [isSortOpen, setIsSortOpen] = useState(false);
  const itemsPerPage = 8;

  // --- FILTERING & SORTING LOGIC ---
  const processedAlbums = useMemo(() => {
    // 1. Filter by Category
    let data =
      activeTab === "all"
        ? [...albums]
        : albums.filter((album) => album.category === activeTab);

    // 2. Sort Data
    data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortOption === "recent") {
        return dateB - dateA; // Newest first
      } else if (sortOption === "oldest") {
        return dateA - dateB; // Oldest first
      } else if (sortOption === "az") {
        return a.title.localeCompare(b.title); // Alphabetical
      }
      return 0;
    });

    return data;
  }, [albums, activeTab, sortOption]);

  // Modal State
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- 1. FETCH DATA ---
  useEffect(() => {
    // API Call simulation
    setTimeout(() => {
      setAlbums(MOCK_ALBUMS);
      setLoading(false);
    }, 500);
  }, []);

  // --- 2. FILTERING ---
  const filteredAlbums = useMemo(() => {
    if (activeTab === "all") return albums;
    return albums.filter((album) => album.category === activeTab);
  }, [albums, activeTab]);

  // --- 3. PAGINATION ---
  const totalPages = Math.ceil(processedAlbums.length / itemsPerPage);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedAlbums.slice(start, start + itemsPerPage); // ✅ Ye Sorted + Filtered data use karega
  }, [currentPage, processedAlbums]);

  // --- HANDLERS ---
  const handleTabChange = (id) => {
    setActiveTab(id);
    setCurrentPage(1);
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Stop background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="w-full bg-[#FEFEFE] px-4 py-12 md:px-8 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER & FILTERS */}
        <div className="flex flex-col gap-8 mb-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A71077]"></span>
            <h2 className="text-xl font-bold text-[#141414]">Photo Gallery</h2>
          </div>

          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`
                    px-6 py-2 rounded-full text-base font-semibold transition-all duration-300
                    ${
                      activeTab === cat.id
                        ? "bg-[#A71077] text-white shadow-md"
                        : "bg-[#F7F7F7] text-[#595959] border-[#F0F0F0] border hover:bg-gray-50"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* SORT DROPDOWN */}
            <div className="relative group min-w-[180px] w-72">
              {/* Main Button */}
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                onBlur={() => setTimeout(() => setIsSortOpen(false), 200)} // Focus hatne par band ho jaye
                className="w-full bg-[#FEFEFE] px-4 py-2.5 rounded-full flex items-center justify-between text-sm font-bold text-[#1F1F1F] shadow-sm border border-[#F0F0F0] hover:border-[#A71077] transition-all"
              >
                {/* Button Text based on selection */}
                <span>
                  {sortOption === "recent" && "Most Recent"}
                  {sortOption === "oldest" && "Oldest First"}
                  {sortOption === "az" && "Alphabetical (A-Z)"}
                </span>

                <ChevronDown
                  className={`w-4 h-4 text-[#A71077] transition-transform duration-300 ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu (Absolute Position) */}
              {isSortOpen && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col p-1">
                    <button
                      onClick={() => {
                        setSortOption("recent");
                        setIsSortOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left rounded-lg font-medium transition-colors ${
                        sortOption === "recent"
                          ? "bg-[#FFF5FA] text-[#A71077]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      Most Recent
                    </button>

                    <button
                      onClick={() => {
                        setSortOption("oldest");
                        setIsSortOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left rounded-lg font-medium transition-colors ${
                        sortOption === "oldest"
                          ? "bg-[#FFF5FA] text-[#A71077]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      Oldest First
                    </button>

                    <button
                      onClick={() => {
                        setSortOption("az");
                        setIsSortOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left rounded-lg font-medium transition-colors ${
                        sortOption === "az"
                          ? "bg-[#FFF5FA] text-[#A71077]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      Alphabetical (A-Z)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ALBUM GRID */}
        {loading ? (
          <div className="h-64 flex items-center justify-center">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentData.map((album) => (
              <AlbumCard
                key={album.id}
                data={album}
                onClick={() => openAlbum(album)}
              />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-lg bg-white text-[#1F1F1F] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center gap-1 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-bold">
                Previous
              </span>
            </button>

            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow-sm">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                                  w-8 h-8 rounded-md text-sm font-bold flex items-center justify-center transition-all
                                  ${
                                    currentPage === page
                                      ? "bg-[#1F1F1F] text-white shadow-md"
                                      : "text-gray-600 hover:bg-gray-100"
                                  }
                                `}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-lg bg-white text-[#1F1F1F] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center gap-1 transition-all"
            >
              <span className="hidden sm:inline text-sm font-bold">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX MODAL (Slider) --- */}
      {isModalOpen && selectedAlbum && (
        <LightboxModal album={selectedAlbum} onClose={closeModal} />
      )}
    </section>
  );
}

// --- SUB-COMPONENT: Album Card (Cluster View) ---
const AlbumCard = ({ data, onClick }) => {
  // Logic to show 1, 2 or 3 images based on availability
  const displayImages = data.images.slice(0, 3);

  return (
    <article
      className="group flex flex-col gap-2 cursor-pointer"
      onClick={onClick}
    >
      {/* CLUSTER LAYOUT */}
      <div className=" relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white  hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {displayImages.length === 1 ? (
          <img
            src={displayImages[0]}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="grid grid-cols-2 h-full gap-1 p-1">
            {/* Main Big Image (Left) */}
            <div className="relative h-full overflow-hidden rounded-xl">
              <img
                src={displayImages[0]}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Smaller Images Stack (Right) */}
            <div className="grid grid-rows-2 gap-1 h-full">
              {displayImages[1] && (
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={displayImages[1]}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}
              {displayImages[2] && (
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={displayImages[2]}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay showing total count if more than 3 */}
                  {data.images.length > 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">
                      +{data.images.length - 3}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
            <ImageIcon className="w-5 h-5 text-[#A71077]" />
          </div>
        </div>
      </div>

      {/* Meta Data */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-[#1F1F1F] group-hover:text-[#A71077] transition-colors leading-tight">
          {data.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-medium text-[#A71077]">
            {data.categoryLabel}
          </span>
          <div className="bg-[#D1D1D1] rounded-full p-0.5 group-hover:bg-[#A71077] transition-colors">
            <ArrowRight className="w-3.5 h-3.5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </article>
  );
};

// --- SUB-COMPONENT: Modal Slider ---
const LightboxModal = ({ album, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % album.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + album.images.length) % album.images.length
    );
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev + 1) % album.images.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex(
          (prev) => (prev - 1 + album.images.length) % album.images.length
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [album.images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all z-50"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Main Container */}
      <div
        className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
      >
        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={album.images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-16 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-16 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Footer info inside modal */}
        <div className="absolute -bottom-12 left-0 text-white w-full flex justify-between items-center px-2">
          <div>
            <h3 className="text-xl font-bold">{album.title}</h3>
            <p className="text-sm text-gray-300">
              {album.categoryLabel} • {album.date}
            </p>
          </div>
          <div className="text-sm font-mono">
            {currentIndex + 1} / {album.images.length}
          </div>
        </div>
      </div>
    </div>
  );
};
