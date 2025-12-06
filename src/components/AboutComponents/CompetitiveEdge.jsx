// CompetitiveEdge.jsx
import React from "react";

export default function CompetitiveEdge() {
  const items = [
    {
      id: "ecosystem",
      title: "Integrated Poultry Ecosystem",
      subtitle:
        "We oversee breeding, hatching, feeding, and processing to ensure quality, safety, and sustainability.",
      tags: ["Farm to Table", "Sustainably Grown"],
      img: "/Rectangle 22.png",
      cta: [{ label: "Explore Verticals", action: "explore" }],
    },
    {
      id: "hatchery",
      title: "Smart Feed & Hatchery Systems",
      subtitle:
        "Our modern plant processes 1,000+ birds per hour under strict hygiene and cold-chain monitoring.",
      tags: ["Born Healthy", "Smartly Fed"],
      img: "/Rectangle 22 (1).png",
      cta: [{ label: "Our Hatchery", action: "hatchery" }],
    },
    {
      id: "processing",
      title: "Advanced Processing & Cold Chain",
      subtitle:
        "Automated feed production and precision hatching deliver strong, healthy birds from the very beginning.",
      tags: ["Fresh. Always.", "Handled with Care"],
      img: "/Rectangle 22 (2).png",
      cta: [{ label: "Explore Products", action: "products" }],
    },
    {
      id: "digital",
      title: "Digital & Operational Innovation",
      subtitle:
        "We connect technology and poultry excellence with a digital ordering app and real-time logistics.",
      tags: ["Tech-Powered", "Seamlessly Connected"],
      img: "/Rectangle 22 (3).png",
      cta: [
        { label: "Download the App", action: "download" },
        { label: "Contact us", action: "contact" },
      ],
    },
  ];

  function handleNavigate(item, action) {
    console.log("Navigate requested:", item.id, action);
  }

  return (
    <section className="w-full px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          {/* Header Section Animation: Fade in could be added here, but keeping it simple for now */}
          <div>
            <span className="inline-block bg-[#FEE2AF] text-[#262626] border border-[#FDD48A] px-3 py-1 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300 cursor-default">
              Our Competitive Edge
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#4B0736]">
              Driving Innovation at Every Step
            </h2>
          </div>

          <p className="hidden md:block text-sm text-[#595959] font-medium max-w-md text-right">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed
            in viverra mauris enim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {items.map((it) => (
            <article
              key={it.id}
              // Added 'group' to trigger child animations on hover
              // Enhanced transition duration and ease for smoother lift
              className="group rounded-2xl h-[315px] overflow-hidden shadow-lg transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl cursor-default"
              aria-labelledby={`title-${it.id}`}
            >
              {/* Added group-hover:border-opacity logic for subtle border highlight */}
              <div className="relative bg-linear-to-r from-[#F08F48]/5 to-[#C868A9]/5 border border-[#BFBFBF] group-hover:border-[#C868A9]/30 transition-colors duration-300 rounded-2xl p-4 h-full flex flex-col justify-between">
                
                {/* Image Section */}
                <div className="flex items-start gap-4">
                  <div className="overflow-hidden rounded-lg w-[100px] h-[100px] shrink-0">
                    <img
                      src={it.img}
                      alt={it.title}
                      // Micro-animation: Image zooms in slightly on card hover
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-center my-auto">
                    <h3
                      id={`title-${it.id}`}
                      className="text-[16px] font-bold text-[#A71077] transition-colors duration-300 group-hover:text-[#8a0d62]"
                    >
                      {it.title}
                    </h3>
                  </div>
                </div>

                {/* Tags Section */}
                <div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {it.tags.map((t, idx) => (
                      <span
                        key={idx}
                        // Micro-animation: Tags scale up slightly and verify cursor on individual hover
                        className="inline-block bg-[#F6E7F1] border border-[#EAC6DE] text-xs font-semibold text-[#141414] px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-[#ebd4e3] cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* description + CTA area */}
                <div className="mt-6 w-full">
                  <p className="text-sm text-[#141414] font-medium mb-4">
                    {it.subtitle}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    {it.cta.map((c, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(it, c.action)}
                        // Added 'group/btn' to control the arrow icon only when hovering THIS button
                        className=" group/btn inline-flex items-center gap-2 font-semibold text-sm text-[#1F1F1F] px-1 transition-all duration-200 hover:brightness-95 active:scale-95"
                        aria-label={`${c.label} for ${it.title}`}
                      >
                        <span>{c.label}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                          // Micro-animation: The whole SVG slides right on button hover
                          className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1"
                        >
                          <circle cx="50" cy="50" r="50" fill="#BDBDBD" className="transition-colors duration-300 group-hover/btn:fill-[#adadad]" />

                          <path
                            d="M40 30 L60 50 L40 70"
                            stroke="white"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}