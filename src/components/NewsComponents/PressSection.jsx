import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  ArrowRight,
  Loader2,
} from "lucide-react";

// --- MOCK API RESPONSE (Jab tak backend ready nahi hai) ---
// Backend se data is format me aana chahiye
const MOCK_API_RESPONSE = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 9,
  source: "Business Today", // Source Name
  date: "2024-10-25", // ISO Date format (YYYY-MM-DD) recommended for backend
  displayDate: "Oct 25", // Formatted date for UI
  title:
    i % 2 === 0
      ? "Ideal Chicken Wins Sustainability Award 2024"
      : "Expansion Plans: New Outlets in Bangalore",
  image: `/src/assets/Rectangle 2 (${i + 9}).png`,
  newsUrl: "/news/ideal-chicken-award-2024", // Internal or External Link
}));

const PressSection = () => {
  // --- STATES ---
  const [newsData, setNewsData] = useState([]); // Empty array initially
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // --- 1. FETCH DATA (Backend Integration Point) ---
  useEffect(() => {
    // Is function ko baad me API call se replace kr dena
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Example: const res = await fetch('/api/press-release');
        // const data = await res.json();

        // Simulating network delay
        setTimeout(() => {
          setNewsData(MOCK_API_RESPONSE);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // --- 2. FILTER & SORT LOGIC ---
  const filteredData = useMemo(() => {
    let data = [...newsData];
    const now = new Date().getTime();

    // Date parsing helper
    const getTimestamp = (dateStr) => new Date(dateStr).getTime();

    if (filter === "recent") {
      data.sort((a, b) => getTimestamp(b.date) - getTimestamp(a.date));
    } else if (filter === "old") {
      data.sort((a, b) => getTimestamp(a.date) - getTimestamp(b.date));
    } else if (filter === "30days") {
      const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
      data = data.filter((item) => getTimestamp(item.date) >= thirtyDaysAgo);
    }
    return data;
  }, [newsData, filter]);

  // --- 3. PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [currentPage, filteredData]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="w-full bg-[#FEFEFE] px-6 pb-8 min-h-[600px]">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-1">
          <div className="flex items-center justify-center gap-2 pb-4">
            <div className="w-2 h-2 bg-[#A71077] rounded-full" />
            <div className="font-bold text-xl text-[#141414]">
              Media Highlights
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 w-full md:w-auto">
            <div className="relative group w-full md:w-80">
              <select
                value={filter}
                onChange={handleFilterChange}
                className="w-full appearance-none bg-white text-[#1F1F1F] font-bold py-2 pl-4 pr-10 rounded-full shadow-sm hover:shadow-md cursor-pointer outline-none border focus:border-[#A71077] transition-all border-[#F0F0F0]"
              >
                <option value="recent">Most Recent</option>
                <option value="old">Oldest First</option>
                <option value="30days">Last 30 Days</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A71077] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-[#A71077] animate-spin" />
          </div>
        ) : (
          <>
            {/* NEWS GRID */}
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {currentItems.map((item) => (
                  <NewsCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 font-medium">
                No news found.
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
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
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-lg bg-white text-[#1F1F1F] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center gap-1 transition-all"
                >
                  <span className="hidden sm:inline text-sm font-bold">
                    Next
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <hr className="mt-12 border-[#F5F5F5] border" />
    </section>
  );
};

// --- NEWS CARD COMPONENT ---
const NewsCard = ({ data }) => {
  return (
    // Anchor tag with NO target="_blank" to open in same tab
    <a
      href={data.newsUrl}
      target="_blank"
      className="group bg-transparent flex flex-col gap-4 cursor-pointer block mt-6"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] shadow-sm group-hover:shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 bg-white">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-medium text-[#595959]">
          <span className="text-[#595959]">{data.source}</span>
          <span className="w-1 h-1 rounded-full bg-[#C868A9]"></span>
          <span>{data.displayDate}</span>
        </div>

        <h3 className="text-xl font-semibold text-[#770B54] leading-tight group-hover:text-[#A71077] transition-colors line-clamp-2">
          {data.title}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#1F1F1F] group/link">
          Read More
          <span className="bg-[#D1D1D1] rounded-full p-0.5 transition-all duration-300 group-hover:bg-[#A71077] group-hover:text-white group-hover:translate-x-1">
            <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default PressSection;
