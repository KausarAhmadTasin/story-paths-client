import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Stories = () => {
  const stories = useLoaderData();

  return (
    <div className="min-h-screen pt-14 pb-10 px-4 md:px-0 bg-gradient-to-br from-purple-100 to-indigo-200">
      <Helmet>
        <title>Storypaths | Stories</title>
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl mt-2 font-extrabold text-center text-gray-800 mb-8">
          Stories
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <li
              className="border p-6 flex flex-col rounded-xl shadow-lg bg-white hover:bg-amber-50 transition-colors duration-300"
              key={story._id}
            >
              <h2 className="text-center font-bold text-xl text-indigo-700 mb-4">
                {story.layers.branch_1.title}
              </h2>
              <div className="flex justify-between text-gray-700 mb-4">
                <p className="font-semibold">
                  Author: <span className="font-normal">{story.author}</span>
                </p>
                <p className="font-semibold">
                  Views:{" "}
                  <span className="font-normal">
                    {story.layers.branch_1.views}
                  </span>
                </p>
              </div>
              <p className="text-gray-700 fleg mb-6">
                {story.layers.branch_1.storyLine}
              </p>
              <Link to={story._id}>
                <p className="flex justify-end items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 cursor-pointer transform hover:-translate-y-1 transition-transform duration-200">
                  Read <FaArrowRight />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stories;
