import React, { useRef } from "react";
import {
  Sprout,
  Store,
  Building2,
  Egg,
  Home,
  Bookmark,
  Flag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Journey = () => {
  const scrollRef = useRef(null);

  // Scroll amount adjust kiya card size ke hisaab se (Card 220 + Gap 20 = 240)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const milestones = [
    {
      year: "2005",
      title: "Feed Factory Est.",
      description: "Feed Factory established at Alangar, Moodbidri",
      icon: <Sprout className="w-6 h-6 text-white" />,
      theme: "pink",
      iconBg: "bg-[#A71077]",
    },
    {
      year: "2005",
      title: "First Retail Store",
      description: "First Retail Store opens at Kulshekar Kaikamba",
      icon: <Store className="w-6 h-6 text-white" />,
      theme: "peach",
      iconBg: "bg-[#5B0F3F]",
    },
    {
      year: "2008",
      title: "Sales Offices",
      description: "Sales offices established at Puthige and Kulshekar",
      icon: <Building2 className="w-6 h-6 text-white" />,
      theme: "pink",
      iconBg: "bg-[#A71077]",
    },
    {
      year: "2011",
      title: "Ideal Hatchery",
      description: "Ideal Hatchery begins operations at Shirthady",
      icon: <Egg className="w-6 h-6 text-white" />,
      theme: "peach",
      iconBg: "bg-[#5B0F3F]",
    },
    {
      year: "2013",
      title: "Admin Office",
      description: "Administrative Office set up at Kalpane, Kulshekar",
      icon: <Home className="w-6 h-6 text-white" />,
      theme: "pink",
      iconBg: "bg-[#A71077]",
    },
    {
      year: "2013",
      title: "Dressed Chicken",
      description: "Dressed chicken unit commissioned at Yedapadavu",
      icon: <Bookmark className="w-6 h-6 text-white" />,
      theme: "peach",
      iconBg: "bg-[#5B0F3F]",
    },
    // Extra dummy data added to show the scrolling effect properly
    {
      year: "2015",
      title: "Processing Plant",
      description: "New automated processing unit setup in Mangalore",
      icon: <Sprout className="w-6 h-6 text-white" />,
      theme: "pink",
      iconBg: "bg-[#A71077]",
    },
    {
      year: "2018",
      title: "Global Export",
      description: "Started exporting premium cuts to Middle East",
      icon: <Flag className="w-6 h-6 text-white" />,
      theme: "peach",
      iconBg: "bg-[#5B0F3F]",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:pl-8 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block bg-[#FEE2AF] border border-[#FDD48A] text-[#262626] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B0736] mb-8">
              Our Journey so far
            </h2>
            <div className="flex items-center gap-2 text-[#666666] font-semibold text-sm tracking-wide uppercase">
              <Flag className="w-4 h-4 fill-gray-400 text-[#595959]" />
              MILESTONES
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <p className="text-[#595959] text-sm md:text-[16px] font-medium md:text-right max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed
              in viverra mauris enim.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-[#A71077] flex items-center justify-center text-white hover:bg-[#8a0d62] transition-colors active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-[#A71077] flex items-center justify-center text-white hover:bg-[#8a0d62] transition-colors active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex relative min-w-max">
            {/* The Gray Line - Adjusted position for new layout */}
            {/* <div className="absolute top-4 left-0 w-full h-0.5 bg-[#D9D9D9] z-0" /> */}

            {milestones.map((item, index) => (
              // Changes: w-[220px] and mr-5 (20px gap)
              <div key={index} className="w-[220px] shrink mr-5 p-1 relative">
                {/* Year Pill - Smaller size to fit card */}
                <div className="relative mb-6">
                  <span className="bg-[#262626] text-[#FEFEFE] px-3 py-1 rounded-full text-xs md:text-[15px] font-semibold shadow-sm z-10 relative">
                    {item.year}
                  </span>
                  <span className="absolute top-3 left-20 w-[63%] h-0.5 bg-[#D9D9D9] z-0" />
                </div>

                {/* Card - Adjusted Height and Padding */}
                <div
                  className={`
                  p-5 rounded-3xl h-[240] flex flex-col gap-3 border
                  transition-transform duration-300 hover:-translate-y-2
                  ${
                    item.theme === "pink"
                      ? "bg-[#FFF2FB] border-[#FAD4ED]"
                      : "bg-[#FDF1E9] border-[#FBDEC9]"
                  }
                `}
                >
                  {/* Icon Box */}
                  <div
                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0
                    ${item.iconBg}
                  `}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex flex-col h-full">
                    <h3 className="text-[#141414] font-bold text-base leading-snug mb-2 line-clamp-2 md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="text-[#454545] text-sm leading-relaxed line-clamp-4 font-medium">
                      {item.description.substring(0,30)+"...."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
