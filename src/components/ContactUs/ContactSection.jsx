import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Store,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
  MessageCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    queryType: "Business Enquiry",
    email: "",
    phone: "",
    message: "",
  });

  const icon = [
    "/src/assets/insta.png",
    "/src/assets/facebook.png",
    "/src/assets/linkedin.png",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- API CALL PLACEHOLDER ---
    // Yahan apna backend API call lagana
    console.log("Form Data to Send:", formData);

    // Simulate delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (Backend integration pending)");
      // Reset form if needed
      // setFormData({...})
    }, 2000);
  };

  return (
    <section
      className="w-full px-7  border-t-2 border-[#F5F5F5] md:py-10 py-6 bg-white"
      id="contact"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-11">
        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="colspan-1 flex flex-col gap-5">
          {/* Header */}
          <div className="space-y-2 border-b-2 border-[#F5F5F5] pb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#F6E7F1] bg-[#FEFEFE] text-[#770B54] text-sm font-bold">
              Contact
            </span>
            <h1 className="text-3xl md:text-[40px] font-semibold text-[#A71077]">
              Get in Touch With Us
            </h1>
            <p className="text-[#4B0736] font-medium text-base md:text-lg max-w-md ">
              Have questions? We're here to help. Reach out to us and we'll
              respond as soon as possible.
            </p>
          </div>

          {/* Contact Details & Map Row */}
          <div className="w-full flex flex-col md:flex-row gap-4 items-start border-b-2 border-[#F5F5F5] pb-5">
            {/* Details List (SEO: Address Tag) */}
            <address className="md:w-[50%] w-full flex flex-col gap-4 not-italic">
              <a
                href="tel:08242230507"
                className="group flex items-center font-medium text-base gap-4 text-[#262626] hover:text-[#A71077] transition-colors"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <img
                    src="/src/assets/phone.png"
                    className="w-7 h-7 text-[#A71077]"
                    alt=""
                  />
                </div>
                <span className="font-semibold text-sm md:text-base">
                  (0824) 2230507
                </span>
              </a>

              <a
                href="mailto:anupamafeeds@idealchicken.in"
                className="group flex items-center gap-4 text-[#1F1F1F] hover:text-[#A71077] transition-colors"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <img
                    src="/src/assets/mail.png"
                    className="w-7 h-7 text-[#A71077]"
                    alt=""
                  />
                </div>
                <span className="font-semibold text-sm md:text-base break-all">
                  anupamafeeds@idealchicken.in
                </span>
              </a>

              <div className="flex items-start gap-4 text-[#1F1F1F]">
                <div className="flex items-center justify-center shrink-0 mt-1 object-contain">
                  <img
                    src="/src/assets/location.png"
                    className="w-7 h-7 text-[#A71077]"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#262626]">
                    Anupama Feeds and Farms
                  </h4>
                  <p className="text-base text-[#262626] font-medium mt-1">
                    Kalpane, Kulshekar, Mangalore,
                    <br /> Karnataka, India
                  </p>
                </div>
              </div>
            </address>

            {/* Map Placeholder (Visual only) */}
            <div className="md:w-[50%] w-full h-full border-[#F5F5F5]  rounded-2xl overflow-hidden relative shadow-md border ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.707632679287!2d74.87747837507662!3d12.86173998744362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3590050ac615b%3A0x6d906e00e0000000!2sAnupama%20Feeds%20and%20Farms!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                title="Anupama Feeds Location"
                width="100%"
                height="100%"
                style={{ border: 0 }} // React style object
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col border-[#F5F5F5] border-b-2 sm:flex-row gap-4 w-full pb-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#2DA771] h-15 border-[#15CF74] hover:bg-[#20bd5a] text-[#FEFEFE] rounded-full p-2 pr-6 flex items-center gap-3 transition-all hover:shadow-lg group"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/src/assets/Vector (12).png"
                  className="w-6 h-6 text-white fill-white "
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-base leading-tight">
                  Connect on WhatsApp
                </span>
                <span className="text-xs font-bold opacity-90 flex items-center gap-1">
                  <img
                    src="/src/assets/Vector (13).png"
                    className=" animate-pulse"
                    alt=""
                  />
                  Faster Response
                </span>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-white transition-transform group-hover:translate-x-1" />
            </a>

            {/* Store Locations Button */}
            <button className="flex-1 relative h-15 bg-white border border-[#E5E5E5] hover:border-[#A71077] text-[#1F1F1F] rounded-full p-2 pr-6 flex items-center gap-3 transition-all hover:shadow-md group">
              <div className="w-10 h-10 bg-[#A71077] rounded-full flex items-center justify-center">
                <img
                  src="/src/assets/Vector (11).png"
                  className="w-5 h-5 brightness-0 invert"
                  alt=""
                />
              </div>
              <span className="font-bold text-base">View Store Locations</span>
              <ArrowRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Social Media */}
          <div className="relative flex items-center gap-4">
            <span className="text-sm font-semibold text-[#1F1F1F]">
              Find us on Social Media
            </span>
            <div className="flex gap-3">
              {icon.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#595959] hover:scale-125 hover:text-white transition-all"
                >
                  <img src={Icon} className="w-5 h-5" alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Contact Form --- */}
        <div className="colspan-1 bg-[#FFF8FD] border-[#FCE7F3] border rounded-[32px] p-6 md:p-10 shadow-sm relative overflow-hidden">
          {/* Decorative Circle (Optional background element) */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#A71077]/5 rounded-full blur-3xl pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-[#1F1F1F]"
                >
                  Full Name <span className="text-[#A71077]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D9D9D9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#A71077] focus:ring-1 focus:ring-[#A71077] transition-all placeholder:text-[#8C8C8C] placeholder:text-base placeholder:medium"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="queryType"
                  className="text-sm font-semibold text-[#1F1F1F]"
                >
                  Query Type <span className="text-[#A71077]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="queryType"
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#D9D9D9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#A71077] focus:ring-1 focus:ring-[#A71077] transition-all appearance-none cursor-pointer"
                  >
                    <option>Business Enquiry</option>
                    <option>Franchise Support</option>
                    <option>Customer Feedback</option>
                    <option>Other</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#1F1F1F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#1F1F1F]"
                >
                  E-mail <span className="text-[#A71077]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D9D9D9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#A71077] focus:ring-1 focus:ring-[#A71077] transition-all placeholder:text-[#8C8C8C] placeholder:text-base placeholder:medium"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-[#1F1F1F]"
                >
                  Phone Number <span className="text-[#A71077]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 99999 99999"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D9D9D9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#A71077] focus:ring-1 focus:ring-[#A71077] transition-all placeholder:text-[#8C8C8C] placeholder:text-base placeholder:medium"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#1F1F1F]"
              >
                Message <span className="text-[#A71077]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Leave us a message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-[#D9D9D9] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#A71077] focus:ring-1 focus:ring-[#A71077] transition-all placeholder:text-[#8C8C8C] placeholder:text-base placeholder:medium"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#A71077] hover:bg-[#8a0963] disabled:opacity-70 disabled:cursor-not-allowed text-[#FEFEFE] font-bold py-3.5 px-6 rounded-full flex items-center justify-between group transition-all shadow-md hover:shadow-lg mt-2 text-xl h-15"
            >
              <span className="pl-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 text-[#A71077] animate-spin" />
                ) : (
                  <ArrowRight className="w-6 h-6 text-[#262626]" />
                )}
              </div>
            </button>

            {/* Privacy Text */}
            <p className="font-normal text-xs md:text-sm text-[#1F1F1F] mt-4">
              By hitting submit you agree to our{" "}
              <a href="#" className="font-medium underline text-[#A71077]">
                privacy policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
