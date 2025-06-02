import { useState } from "react";
import aboutBanner from "../../assets/about_banner.gif"; // update path as needed

const about = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          All <span className="text-red-500 font-bold">About</span> Me And My{" "}
          <span className="text-red-500 font-bold">Experience</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded font-medium ${
            showFirstDiv
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
          onClick={() => setShowFirstDiv(true)}
        >
          About Me
        </button>

        <button
          className={`px-6 py-2 rounded font-medium ${
            !showFirstDiv
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
          onClick={() => setShowFirstDiv(false)}
        >
          Experience
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutBanner}
            alt="About Banner"
            className="w-64 h-64 object-cover  border-red-500"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          {showFirstDiv ? (
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>
                Hello! My name is <strong>Sonu Kumar Singh</strong>. I am from
                Patna, Bihar. I enjoy creating things that live on the internet.
                I'm a passionate developer with strong communication skills and
                attention to detail.
              </li>
              <li>
                I have done my <strong>BCA</strong> from Magadh University, Bodh
                Gaya. I’ve also completed my Full-Stack Web Development course
                from <strong>Masai School</strong>.
              </li>
            </ul>
          ) : (
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>
                 
                Results-oriented <strong>Full Stack Developer</strong> with <strong>2+</strong> years of experience building responsive, 
                scalable, and secure web applications. Strong in problem-solving and team collaboration.
              </li>
              <li>
                Well-versed in <strong>Frontend Development</strong> using HTML, CSS, JavaScript,
                and React.js,Inertia.js. Also experienced in <strong>Backend Development</strong> with
                Node.js, Express.js, PHP, Laravel, MySQL, and MongoDB.
              </li>
              <li>
                Familiarity with version control using <strong>Git</strong> and{" "}
                <strong>GitHub</strong>.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default about;
