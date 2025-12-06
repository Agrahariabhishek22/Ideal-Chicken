 import React from 'react'
import BlogHeroSection from '../components/BlogDetails/BlogHeroSection'
import RelatedPosts from '../components/BlogDetails/RelatedBlogs'
import Introduction from '../components/BlogDetails/Introduction'
 
 const BlogDetails = () => {
   return (
     <>
     <BlogHeroSection/>
     <Introduction/>
     <RelatedPosts/>
     </>
   )
 }
 
 export default BlogDetails 