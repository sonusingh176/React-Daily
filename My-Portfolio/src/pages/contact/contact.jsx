import React from 'react'
import contactImg from "../../assets/contactImg.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const socialLinks = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com",
    bg: "bg-black",
    hover: "hover:bg-gray-700",
  },
  {
    label: "Gmail",
    icon: <MdEmail />,
    href: "mailto:your-email@gmail.com",
    bg: "bg-red-600",
    hover: "hover:bg-red-700",
  },
];

 // Common input style
 const inputClass =
 "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";

// Social button style
const socialBtn =
 "flex items-center gap-2 px-4 py-2 rounded-full text-white transition";



const contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Take A <span className="text-red-500 font-bold">Coffee </span>And{" "} <span className="text-red-500 font-bold">Chat </span>With Me
        </h2>
      </div>

    
      {/* Content Section */}
      <div className="flex    md:flex-row items-center gap-8">
      
             <div className="w-full md:w-1/2 flex justify-center">
               <img
                 src={contactImg}
                 alt="About Banner"
                 className="w-64 h-64 object-cover  border-red-500"
               />
             </div>
     
             {/* Text */}
             <div className="w-full md:w-1/2">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {socialLinks.map(({ label, icon, href, bg, hover }, i) => (
                      <button
                        key={i}
                        onClick={() => window.open(href, "_blank")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-white  transition ${bg} ${hover}`}
                      >
                        {icon} {label}
                      </button>
                    ))}
                </div>

                    {/* Contact Form */}
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className={inputClass} />
                  <input type="email" placeholder="Email" className={inputClass} />
                  <input type="tel" placeholder="Mobile" className={inputClass} />
                  <textarea
                    rows="4"
                    placeholder="Your message"
                    className={`${inputClass} resize-none`}
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-red-600 text-white px-5 py-3 rounded hover:bg-red-700 transition w-full sm:w-fit"
                  >
                    Send Message
                  </button>
                </form>

             </div>
      </div>

    </div>
  )
}

export default contact