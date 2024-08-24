import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full fixed top-0 ring-0 z-10 flex justify-between py-2 px-8 bg-black">
        <h3 className="text-white text-xl">StoryPaths</h3>

        <div className="flex">
          <ul className="flex gap-x-5 mr-3 text-white">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/stories">
              <li>Stories</li>
            </Link>
            <Link to="/write">
              <li>Write</li>
            </Link>
            <Link to="/myStories">
              <li>My Stories</li>
            </Link>
          </ul>{" "}
          <Link to="/login">
            {" "}
            <p className="text-white">Login</p>
          </Link>
          <Link to="/register">
            {" "}
            <p className="text-white">Register</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
