import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#262555] pt-8 pb-4 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/">
            {" "}
            <h4 className="text-white text-xl font-semibold mb-2">
              StoryPaths
            </h4>
          </Link>
          <p className="text-gray-200 text-sm mb-4">
            Craft your adventures and explore interactive stories with us!
          </p>
          <ul className="flex justify-center gap-6 mb-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <p className="text-gray-400 text-sm mt-16">
          All rights reserved © {new Date().getFullYear()} StoryPaths
        </p>
      </div>
    </footer>
  );
};

export default Footer;
