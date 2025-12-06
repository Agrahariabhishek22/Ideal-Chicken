// FoundersMessage.jsx
import React from "react";

export default function FoundersMessage({
  name = "Vincent Cutinha",
  role = "Founder & CEO, Anupama Feeds & Farms and Ideal Chicken",
  quote = `“Quality is not just what we deliver — it's who we are. Every day, we work with dedication to ensure that families across India can trust Ideal Chicken for their nutrition, health, and happiness. Our commitment goes beyond business; it's a promise to nurture generations.”`,
  label = "FOUNDER'S MESSAGE",
  avatar = "/Founder 1.png", // pass avatar url if you have a separate avatar image
}) {
  return (
    <section
      aria-label="Founder's message"
      className="w-full p-2 py-6"
    >
      <div
        className=" rounded-2xl overflow-hidden p-6"
      >
        {/* subtle translucent panel on top so text is always readable */}
        <div className="bg-[#FFF8FD] border border-[#F0F0F0] rounded-2xl p-6 md:p-8 flex items-center flex-col md:flex-row gap-8 md:gap-20">
          {/* left: avatar + name */}
          <div className="shrink-0 flex items-start gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-200">
              {avatar ? (
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
              ) : (
                // placeholder circle with initials fallback
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold text-pink-700">
                  {name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
              )}
            </div>

            <div className="block ">
              <div className="text-xl font-bold text-[#A71077]">{name}</div>
              <div className="text-sm text-[#454545] mt-1 max-w-xs font-semibold">{role}</div>
            </div>
          </div>

          {/* right: label + quote */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <img src="/double quote.png" alt="" />
              <span className="text-xs font-semibold text-[#770B54] tracking-wider">{label}</span>
            </div>
            {/* <div className="border border-[#F0F0F0]" /> */}
            <hr className="text-[#F0F0F0] my-2" />
            <blockquote className="text-sm md:text-base leading-relaxed text-[#141414] font-semibold">
              <span dangerouslySetInnerHTML={{ __html: highlightKeyword(quote, "Ideal Chicken") }} />
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/** simple helper to highlight a keyword in the quote (returns safe HTML) */
function highlightKeyword(text, keyword) {
  if (!keyword) return escapeHtml(text);
  const escapedKeyword = escapeRegExp(keyword);
  const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
  return parts
    .map((part) =>
      part.toLowerCase() === keyword.toLowerCase()
        ? `<strong class="text-[#A71077]">${escapeHtml(part)}</strong>`
        : escapeHtml(part)
    )
    .join("");
}

/** small helpers to avoid XSS if you later accept raw strings */
function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeRegExp(s = "") {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
