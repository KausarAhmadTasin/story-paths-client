import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Stories = () => {
  const stories = useLoaderData();

  return (
    <div className="min-h-screen pt-14 pb-10 bg-[url('https://i.ibb.co/4K1nyzb/seamless-circle-G03-GBB.jpg')] bg-repeat bg-auto">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-5">Stories</h1>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-6">
          {stories.map((story) => (
            <li
              className="border p-4 rounded-lg shadow-md bg-amber-50"
              key={story._id}
            >
              <h2 className="text-center font-bold text-lg mb-2">
                {story.layers.branch_1.title}
              </h2>
              <div className="flex justify-between">
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
              <p className="my-4">{story.layers.branch_1.storyLine}</p>
              <Link to={story._id}>
                {" "}
                <p className="flex justify-end my-1 items-center gap-2 cursor-pointer hover:-translate-y-1 duration-200">
                  {" "}
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
