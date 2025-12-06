import React from 'react';

const Introduction = () => {
  return (
    <div className=" min-h-screen flex justify-center py-1 px-4 sm:px-6">
      <div className="max-w-[640px] w-full font-sans">
        
        {/* --- CONTENT FROM FIRST IMAGE (Content 2) --- */}

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900  mb-3 lg:mb-6 tracking-tight">
          Introduction
        </h1>

        {/* First Paragraph */}
        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-3 lg:mb-6">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>

        {/* Second Paragraph */}
        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-8">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>

        {/* Image Section 1 */}
        <div className="mb-2">
          <img 
            src="/Rectangle 2 (4).png" 
            alt="Poultry farm white chickens" 
            className="w-full h-auto rounded-2xl object-cover shadow-sm aspect-[16/10]"
          />
        </div>

        {/* Caption 1 */}
        <p className="text-[11px] text-gray-500 mb-10">
          Pellentesque dignissim smet a porttitor nunc mattis tellus nisi lacus.
        </p>

        {/* Third Paragraph */}
        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-10">
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>

        {/* Blockquote */}
        <div className="border-l-[3px] border-fuchsia-700 pl-6 py-1 mb-2 lg:mb-10">
          <p className="text-[19px] font-medium text-gray-800 leading-[1.4] tracking-tight">
            “Modern retail, e-commerce, and quick commerce have made access to processed poultry easier. Players invest in cold-chain logistics and last-mile delivery for freshness.”
          </p>
        </div>


        {/* --- CONTENT FROM SECOND IMAGE (Content 3) --- */}

        {/* Continued Text Blocks */}
        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-6">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </p>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-6">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
        </p>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-10">
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>

        {/* Heading: Changing Lifestyles */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
          Changing Lifestyles, Changing Preferences
        </h2>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-6">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-10">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>

        {/* Heading: Health and Hygiene */}
        <h2 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
          Health and Hygiene at the Forefront
        </h2>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-6">
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
        </p>

        {/* Numbered List */}
        <ol className="list-decimal pl-5 space-y-2 text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-10 marker:text-gray-900 marker:font-medium">
            <li className="pl-2">Lectus id duis vitae porttitor enim gravida morbi.</li>
            <li className="pl-2">Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
            <li className="pl-2">Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
        </ol>

        {/* Image Section 2 */}
        <div className="mb-2">
          <img 
            src="/Rectangle 2 (3).png" 
            alt="Close up of white chicken" 
            className="w-full h-auto rounded-2xl object-cover shadow-sm aspect-[16/10]"
          />
        </div>

        {/* Caption 2 */}
        <p className="text-[11px] text-gray-500 mb-10">
          Pellentesque dignissim smet a porttitor nunc mattis tellus nisi lacus.
        </p>

        {/* Final Paragraphs */}
        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-6">
          Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
        </p>

        <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 lg:mb-16">
          Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </p>

        {/* Footer: Share this post */}
        <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-bold text-gray-800">Share this post</span>
            
            <div className="flex items-center gap-3">
                {/* Copy Link Button */}
                <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">Copy link</span>
                </button>

                {/* X Icon */}
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-[#A71077]">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                </button>

                {/* Facebook Icon */}
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4 text-[#A71077]">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* LinkedIn Icon */}
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                     <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4 text-[#A71077]">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Introduction;