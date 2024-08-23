const Navbar = () => {
  return (
    <div>
      <nav className="w-full fixed top-0 ring-0 z-10 flex justify-between py-2 px-8 bg-black">
        <h3 className="text-white text-xl">StoryPaths</h3>

        <ul className="flex gap-x-5 text-white">
          <li>Home</li>
          <li>Stories</li>
          <li>Write</li>
          <li>My Stories</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
