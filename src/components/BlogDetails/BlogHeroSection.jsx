import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogHeroSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // --- DATA (Ye wahi data hai jo Listing page me tha, taaki ID match ho sake) ---
  // Real app me ye API call hoga. Abhi ke liye hardcoded hai.
  const allPosts = [
    {
      id: 1,
      category: "Insights",
      date: "October 2025",
      title: "The Rising Demand for Processed Poultry in India",
      description: "With shifting consumer lifestyles, processed poultry products are becoming a staple in urban kitchens. Here's what's driving this growing market trend.",
      image: "/Frame 26 (1).png", // Apni image path yahan dalein
       
      
    },
    // ... Agar aur posts hain to yaha add kar sakte ho logic test karne ke liye
    {
       id: 2,
       title: "Inside Our New Line of Ready-to-Cook Chicken Cuts",
       category: "Product Stories",
       date: "October 2025",
       description: "Discover how our latest range of hygienically packed chicken cuts is redefining convenience.",
       image: "/Rectangle 2 (1).png",
       content: <p>Dummy content for post 2...</p>
    }
  ];

  // --- EFFECT: Find Post & Scroll Top ---
  useEffect(() => {
    // ID URL se string aati hai, usko number me convert karke compare kar rahe hain
    const foundPost = allPosts.find(p => p.id === parseInt(id));
    
    // Agar post mil jaye to set karo, nahi to default (ya 404 logic)
    if (foundPost) {
      setPost(foundPost);
    } else {
        // Fallback agar ID match na kare (Listing page wala data use kar lena)
        // Testing ke liye main ID 1 set kar raha hu agar match na ho
        setPost(allPosts[0]); 
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="lg:min-h-screen    font-sans text-gray-900 pb-5">
      
      {/* Container - Max width set ki hai readability ke liye (like Medium/Blogs) */}
      <div className="max-w-7xl mx-auto px-6 pt-10">

        {/* --- 1. Back Button --- */}
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-pink-700 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="lg:ml-4 text-[#1f1f1f] group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </button>

        {/* --- 2. Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-3 text-sm font-semibold mb-5">
            <span className="text-[#1F1F1F]">{post.date}</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#A71077]   tracking-wide">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl max-w-[1300px]  md:text-5xl font-bold text-[#1F1F1F] leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* --- 3. Hero Image (Pixel Perfect Rounded Corners) --- */}
        <div className="w-full max-w-[1600px]   md:aspect-[15/9] overflow-hidden rounded-[32px]   lg:mb-16">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* --- 4. Blog Content Body --- */}
        
      </div>
    </div>
  );
};

export default BlogHeroSection;