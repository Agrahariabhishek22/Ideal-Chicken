import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const RelatedPosts = () => {
  const navigate = useNavigate();

  // --- MOCK DATA (As per your image) ---
  const relatedData = [
    {
      id: 1,
      category: "Quality",
      date: "Sep 25",
      title: "The Science Behind Our Quality Assurance Process",
      image: "/Rectangle 2 (1).png", // Replace with actual image path
    },
    {
      id: 2,
      category: "Insights",
      date: "Sep 25",
      title: "Market Insights: India's Growing Appetite for Protein",
      image: "/Rectangle 2 (2).png", 
    },
    {
      id: 3,
      category: "Sustainability",
      date: "Sep 25",
      title: "Turning Poultry Waste into Renewable Energy",
      image: "/Rectangle 2 (3).png", 
    },
    {
      id: 104,
      category: "Innovation",
      date: "Jul 25",
      title: "How Automation is Reshaping Poultry Processing Plants",
      description: "From robotic handling to smart sensors, discover how automation is improving efficiency and traceability in modern processing facilities.",
      image: "/Rectangle 2 (4).png" // Machine/Factory placeholder
    },
  ];

  // --- HANDLER ---
  const handleCardClick = (id) => {
    // 1. Navigate to details page
    navigate(`/blog/${id}`);
    // 2. Scroll to top instantly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="  py-20 px-6 font-sans"> {/* Light Gray Background matches image */}
      <div className="max-w-[1450px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-12 relative">
            
          {/* Yellow Badge */}
          <span className="bg-[#FFEAC2] text-[#854D0E] px-6 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">
            Related Posts
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-[#4A0A35] mb-4">
            Other stories that you might like
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 max-w-2xl mb-8 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim. Arcu sed iaculis nibh molestie.
          </p>

          {/* View All Button */}
          <button 
            onClick={() => navigate('/resources/blog')}
            className="bg-[#1A1A1A] text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-all hover:scale-105"
          >
            View All
            <div className="bg-white text-black rounded-full p-1.5">
               <ArrowUpRight size={16} strokeWidth={3} />
            </div>
          </button>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {relatedData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleCardClick(item.id)}
              className="flex flex-col h-full group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl mb-5 h-[240px] w-full bg-gray-300 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-2 mb-3 text-sm">
                <span className="font-bold text-gray-700">{item.category}</span>
                <span className="text-[6px] text-pink-600">●</span>
                <span className="font-bold text-gray-500">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-[#6D104B] text-xl font-bold leading-tight mb-3 group-hover:text-pink-700 transition-colors line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-gray-900 font-bold text-sm">Read More</span>
                <div className="bg-gray-200 rounded-full p-0.5 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedPosts;