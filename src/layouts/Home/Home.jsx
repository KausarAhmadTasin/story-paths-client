import "./Home.css";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* 
            -------- Hero section --------- 
    */}
      <div className="flex py-12 px-10 items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-2">Welcome to StoryPaths</h1>
          <h3 className="text-2xl font-semibol">
            Craft Your Own Adventure with StoryPaths
          </h3>
          <ul className="list-disc mt-5 ml-8 list-outside">
            <li className="mb-1">Where Every Choice Leads to a New Story</li>
            <li>Explore Endless Narratives, One Path at a Time</li>
          </ul>
        </div>

        <div className="w-1/2">
          <p className="font-semibold text-gray-600">
            StoryPaths is an interactive storytelling platform that lets you
            immerse yourself in tales where your choices shape the narrative.
            Whether you’re here to explore stories or create your own, every
            decision you make leads to a new adventure. Dive into a world of
            branching paths and endless possibilities!
          </p>
        </div>
      </div>
      <div className="">
        {" "}
        <div className="text-center mt-3">
          <h2 className="text-xl font-bold mb-3 underline decoration-dashed underline-offset-4">
            For Readers
          </h2>
          <h3 className="font-semibold mb-3">
            Explore a wide range of interactive stories and see where your
            choices take you.
          </h3>
          <button className="btn duration-200 active:scale-105 px-4 py-3 font-medium text-white rounded-lg bg-green-600">
            Start Your Adventure
          </button>
        </div>
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold mb-3 underline decoration-dashed underline-offset-4">
            Authors
          </h2>
          <h3 className="font-semibold mb-3">
            Craft your own interactive stories and see how readers engage with
            your narrative.
          </h3>
          <button className="btn duration-200 active:scale-105 px-4 py-3 font-medium text-white rounded-lg bg-green-600">
            Create a Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
