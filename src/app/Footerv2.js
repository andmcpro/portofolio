// components/Footer.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footerv2 = () => {
  return (
    <footer className="bg-pink-100 text-black py-6">
      <div className="max-w-7xl mx-auto px-20 flex justify-between items-center">
        <div className="flex space-x-6">
          {/* Email */}
          <a
            href="mailto:andreasnovky@gmail.com"
            className="text-lg hover:text-emerald-800"
          >
            <FaEnvelope className="inline-block mr-2" />
            Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/andreasnovky-ramadani-a60691338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-emerald-800"
          >
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/andmcpro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-emerald-800"
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
        </div>

        {/* <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footerv2;
