import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative rounded-xl overflow-hidden my-12 bg-gradient-to-b from-amber-100 to-amber-400 shadow-lg">
      {/* 

            --------- Backgorund Image ------------


       */}
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/Dkk8tV2/nong-9pw4-TKv-T3po-unsplash-1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl opacity-50"
        />
      </div>

      {/* 

            --------- content ------------


       */}
      <div className="relative flex flex-col items-center justify-center h-full text-center md:px-0 px-2 py-20 text-gray-900">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">
          Welcome to StoryPaths
        </h1>
        <h3 className="text-3xl font-semibold mb-8">
          Craft Your Own Adventure
        </h3>
        <p className="max-w-2xl text-lg font-medium mb-8">
          StoryPaths is an interactive platform where your choices shape the
          narrative. Dive into a world of branching paths and endless
          possibilities. Explore, choose, and see where the story takes you!
        </p>

        {/* 

            --------- Buttons ------------


       */}
        <div className="flex flex-col md:flex-row gap-8">
          <Link to="/stories">
            <button className="px-6 py-3 font-semibold text-lg text-white bg-purple-500 hover:bg-purple-600 rounded-lg shadow-md transition transform hover:scale-105">
              Start Your Adventure
            </button>
          </Link>
          <Link to="/write">
            <button className="px-6 py-3 font-semibold text-lg text-black bg-amber-50 hover:bg-amber-100 rounded-lg shadow-lg transition transform hover:scale-105">
              Create a Story
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
