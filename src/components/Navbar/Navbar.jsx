import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handlLogOut = () => {
    logOut();
  };

  return (
    <nav className="w-full fixed top-0 z-10 flex justify-between items-center py-2 px-6 bg-[#292e58] shadow-lg">
      <Link to="/">
        <h3 className="text-2xl cursor-pointer font-bold text-white">
          StoryPaths
        </h3>
      </Link>
      <div className="hidden md:flex gap-x-8 text-lg text-white">
        <Link to="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/stories" className="hover:text-gray-300 transition-colors">
          Stories
        </Link>
        <Link to="/write" className="hover:text-gray-300 transition-colors">
          Write
        </Link>
        <Link to="/myStories" className="hover:text-gray-300 transition-colors">
          My Stories
        </Link>
      </div>
      <div className="hidden md:flex gap-x-4 text-lg text-white">
        {user ? (
          <>
            <p
              onClick={handlLogOut}
              className="hover:text-gray-300 text-base transition-colors cursor-pointer"
            >
              Logout
            </p>
          </>
        ) : (
          <Link
            to="/login"
            className="hover:text-gray-300 text-base transition-colors"
          >
            Login
          </Link>
        )}
        <Link
          to="/register"
          className="hover:text-gray-300 text-base transition-colors"
        >
          Register
        </Link>
      </div>

      <div className="md:hidden">
        {/* 
        
              ------ Mobile menu button ------ 
        
        */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* 

                ------- Mobile Menu ------- 
      
      */}
      <div
        className={`md:hidden absolute top-14 right-0 bg-gradient-to-r from-purple-500 to-indigo-900 text-white shadow-lg rounded-md transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } flex flex-col gap-y-4 py-4 px-10`}
      >
        <Link
          to="/"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/stories"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Stories
        </Link>
        <Link
          to="/write"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Write
        </Link>
        <Link
          to="/myStories"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          My Stories
        </Link>
        <Link
          to="/login"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
