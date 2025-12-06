import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogListing = () => {
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---
  const [activeCategory, setActiveCategory] = useState("View All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sorting State
  const [sortOption, setSortOption] = useState("Most Recent"); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const dropdownRef = useRef(null); 

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

  // --- BASE DATA (Local Images Only) ---
  const baseData = [
    {
      id: 1,
      category: "Insights",
      date: "Oct 25",
      isoDate: "2025-10-25",
      title: "The Rising Demand for Processed Poultry in India",
      description: "With shifting consumer lifestyles, processed poultry products are becoming a staple in urban kitchens.",
      image: "/Rectangle 2.png", // Main Image (Public folder)
      
      // --- Details Page Content ---
      introduction: "The poultry industry in India is undergoing a significant transformation. Gone are the days when buying chicken was a weekend ritual...",
      
      section1Title: "The Shift in Consumer Behavior",
      section1Content: "Health consciousness is at an all-time high. Consumers are demanding transparency in sourcing and hygiene...",
      
      // Bhai yahan apni public folder ki image ka naam daal dena
      extraImage1: "/detail-img-1.png", 
      extraImage1Caption: "Modern poultry farming practices ensure better quality control.",
      
      highlightQuote: "Modern retail, e-commerce, and quick commerce have made access to processed poultry easier.",
      
      section2Title: "Changing Lifestyles, Changing Preferences",
      section2Content: "Urbanization is a key driver. As more families become nuclear and dual-income, time spent in the kitchen is reducing...",
      
      // Bhai yahan dusri image ka naam daal dena
      extraImage2: "/detail-img-2.png", 
      extraImage2Caption: "High-quality breed selection ensures premium protein output.",
      
      conclusion: "As we look towards 2026, the processed poultry sector is expected to grow exponentially."
    },
    {
      id: 2,
      category: "Product Stories",
      date: "Oct 20",
      isoDate: "2025-10-20",
      title: "Inside Our New Line of Ready-to-Cook Chicken Cuts",
      description: "Discover how our latest range of hygienically packed chicken cuts is redefining convenience.",
      image: "/Rectangle 2 (1).png",

      introduction: "Cooking chicken just got easier. Our new line of Ready-to-Cook cuts is designed for the modern chef...",
      section1Title: "Hygiene First",
      section1Content: "Our processing plants follow international safety standards to ensure that every cut you receive is free from antibiotics...",
      
      extraImage1: "/detail-img-3.png", // Local Image path
      extraImage1Caption: "Sterile processing environment.",
      
      highlightQuote: "Convenience shouldn't come at the cost of health. We ensure both.",
      
      section2Title: "Variety for Every Palate",
      section2Content: "From spicy wings to herb-crusted breast fillets, our range covers it all.",
      
      extraImage2: "/detail-img-4.png", // Local Image path
      extraImage2Caption: "Ready-to-cook marinated variety.",
      
      conclusion: "Try them out today at your nearest store."
    },
    {
      id: 3,
      category: "Sustainability",
      date: "Oct 15",
      isoDate: "2025-10-15",
      title: "Building a Greener Supply Chain: Goals for 2026",
      description: "From waste reduction to energy-efficient cold chains, we're making sustainability measurable.",
      image: "/Rectangle 2 (2).png",
      introduction: "Sustainability is no longer a choice; it is a responsibility. We are committing to reducing our carbon footprint...",
      section1Title: "Solar Powered Farms",
      section1Content: "We are transitioning 50% of our farms to run on solar energy within the next two years.",
      
      extraImage1: "/detail-img-5.png",
      extraImage1Caption: "Solar panels installed at our primary facility.",
      
      highlightQuote: "Green energy is the future of sustainable farming.",
      section2Title: "Waste Management",
      section2Content: "Converting poultry waste into bio-gas is our next big step.",
      
      extraImage2: "/detail-img-6.png",
      extraImage2Caption: "Bio-gas plant prototype.",
      
      conclusion: "Join us in our journey towards a greener planet."
    },
    {
      id: 4,
      category: "Innovation",
      date: "Sep 28",
      isoDate: "2025-09-28",
      title: "Smart Feed: How Technology is Transforming Poultry Nutrition",
      description: "Learn how AI-driven analytics and precision feeding are improving flock health.",
      image: "/Rectangle 2 (3).png",
      introduction: "Technology is revolutionizing how we feed our flocks. Smart Feed ensures optimal nutrition with zero waste.",
      section1Title: "AI Driven Analytics",
      section1Content: "Sensors monitor bird health and adjust feed composition in real-time.",
      
      extraImage1: "/detail-img-7.png",
      extraImage1Caption: "AI monitoring dashboard.",
      
      highlightQuote: "Precision feeding leads to healthier birds and better produce.",
      section2Title: "Result: Better Nutrition",
      section2Content: "The end result is chicken that is richer in protein and healthier for consumption.",
      
      extraImage2: "/detail-img-8.png",
      extraImage2Caption: "Automated feeding lines.",
      
      conclusion: "Innovation is the key to food security."
    },
    {
      id: 5,
      category: "Quality",
      date: "Sep 25",
      isoDate: "2025-09-25",
      title: "The Science Behind Our Quality Assurance Process",
      description: "A behind-the-scenes look at how every batch is tested, verified, and certified.",
      image: "/Rectangle 2 (4).png",
      introduction: "Quality is not an accident; it is a result of intelligent effort. Here is how we ensure it.",
      section1Title: "Lab Testing",
      section1Content: "Every batch goes through 50+ quality checks before leaving the factory.",
      
      extraImage1: "/detail-img-9.png",
      extraImage1Caption: "Quality control lab.",
      
      highlightQuote: "We don't compromise on quality, ever.",
      section2Title: "Certification",
      section2Content: "We are ISO 22000 certified, ensuring global standards.",
      
      extraImage2: "/detail-img-10.png",
      extraImage2Caption: "Certified safe stamp.",
      
      conclusion: "Trust is built on consistent quality."
    },
  ];

  // --- DATA GENERATION ---
  const allBlogPosts = Array.from({ length: 32 }).map((_, index) => {
    const baseItem = baseData[index % baseData.length];
    return {
      ...baseItem,
      id: index,
      title: `${baseItem.title}`, 
    };
  });

  // --- FILTERING, SORTING & PAGINATION LOGIC (Same as before) ---
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = activeCategory === "View All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === "Most Recent") {
      return new Date(b.isoDate) - new Date(a.isoDate);
    } else if (sortOption === "Oldest First") {
      return new Date(a.isoDate) - new Date(b.isoDate);
    } else if (sortOption === "Alphabetical") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPosts.slice(indexOfFirstItem, indexOfLastItem);

  // --- HANDLERS (Same as before) ---
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
    setCurrentPage(1);
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

  // --- RENDER ---
  return (
    <div className="min-h-screen font-sans py-10 ">

      <div className="w-full max-w-[1450px] mx-auto px-6">

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 relative z-20">
          
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm
                ${activeCategory === cat
                  ? 'bg-[#A71077] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {currentItems.map((post) => (
              <div 
                key={post.id} 
                onClick={() => navigate(`/blog/${post.id}`)}
                className="flex flex-col h-full group cursor-pointer bg-transparent"
              >
                <div className="overflow-hidden rounded-2xl mb-4 h-[220px] shadow-sm bg-gray-200 relative">
                   <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-500">{post.category}</span>
                  <span className="text-[8px] text-gray-400">●</span>
                  <span className="text-xs font-bold text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-[#770B54] text-xl font-bold leading-tight mb-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.description}
                </p>

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

        {/* Pagination */}
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