import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:my-6 my-8 relative rounded-xl">
      {/* Background image */}
      <div className="absolute inset-0 rounded-xl">
        <img
          src="https://i.ibb.co/Dkk8tV2/nong-9pw4-TKv-T3po-unsplash-1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
      </div>
      {/* Overlay content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white py-14">
        <div className="flex flex-col lg:flex-row rounded-xl md:px-5 lg:px-10 px-10 mb-10 items-center">
          <div className="lg:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Welcome to StoryPaths
            </h1>
            <h3 className="text-2xl font-semibold">
              Craft Your Own Adventure with StoryPaths
            </h3>
            <ul className="list-disc mt-5 ml-8 list-outside">
              <li className="mb-1">Where Every Choice Leads to a New Story</li>
              <li>Explore Endless Narratives, One Path at a Time</li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <p className="font-semibold mt-0 md:mt-8 lg:mt-0">
              StoryPaths is an interactive storytelling platform that lets you
              immerse yourself in tales where your choices shape the narrative.
              Whether you’re here to explore stories or create your own, every
              decision you make leads to a new adventure. Dive into a world of
              branching paths and endless possibilities!
            </p>
          </div>
        </div>
        <div>
          <div className="text-center mt-3">
            <h2 className="text-xl font-bold mb-3 underline decoration-dashed underline-offset-4">
              For Readers
            </h2>
            <h3 className="font-semibold mb-3">
              Explore a wide range of interactive stories and see where your
              choices take you.
            </h3>
            <Link to="/stories">
              <button className="btn duration-200 active:scale-105 px-4 py-3 font-medium text-white rounded-lg bg-green-600">
                Start Your Adventure
              </button>
            </Link>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-xl font-bold mb-3 underline decoration-dashed underline-offset-4">
              Authors
            </h2>
            <h3 className="font-semibold mb-3">
              Craft your own interactive stories and see how readers engage with
              your narrative.
            </h3>
            <Link to="/write">
              <button className="btn duration-200 active:scale-105 px-4 py-3 font-medium text-white rounded-lg bg-green-600">
                Create a Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
