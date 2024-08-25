import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HomeStories = ({ stories }) => {
  return (
    <div>
      {/* Read Stories Section */}
      <section className="mt-20 bg-amber-50 px-4 py-8 rounded-lg">
        <h1 className="text-3xl text-center font-bold mb-8">Read Stories</h1>
        <p className="text-center text-gray-700 mb-8">
          Dive into our collection of engaging stories. Whether you&apos;re
          looking for adventure, mystery, or romance, we have something for
          everyone.
        </p>
        {stories.length === 0 ? (
          <p className="text-center text-gray-700">No stories here</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <li
                className="border p-6 flex flex-col rounded-xl shadow-lg bg-white transition-colors duration-300"
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
                <Link to={`stories/${story._id}`}>
                  <p className="flex justify-end items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 cursor-pointer transform hover:-translate-y-1 transition-transform duration-200">
                    Read <FaArrowRight />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center mt-8">
          <a
            href="/stories"
            className="bg-green-500 font-medium hover:bg-green-600 text-white px-6 py-3 rounded shadow-md"
          >
            Explore Stories
          </a>
        </div>
      </section>
    </div>
  );
};

HomeStories.propTypes = {
  stories: PropTypes.array,
};

export default HomeStories;
