import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const MyStories = () => {
  const [stories, setStories] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stories?email=${user?.email}`)
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen pt-14 bg-gray-50">
      <Helmet>
        <title>Storypaths | My Story</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Story Readership Statistics
        </h1>
        {stories.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              You don&apos;t have a story yet.
            </p>
            <button
              onClick={() => navigate("/write")}
              className="bg-purple-400 text-white font-semibold py-2 px-4 rounded hover:bg-purple-500 transition-colors"
            >
              Write Your First Story
            </button>
          </div>
        ) : (
          stories.map((story) => (
            <div
              key={story._id}
              className="bg-white shadow-lg rounded-lg p-6 mb-12"
            >
              <h2 className="text-2xl underline underline-offset-4 mb-4 font-bold text-center text-blue-600">
                {story?.layers.branch_1.title}
              </h2>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Branch Number & Title
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Views
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Time Spent (seconds)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(story.layers).map((branchKey, index) => (
                    <tr
                      key={branchKey}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="border px-4 py-2">
                        <strong className="text-blue-600">{branchKey}</strong>:{" "}
                        {story.layers[branchKey].title}
                      </td>
                      <td className="border px-4 py-2 text-gray-800">
                        {story.layers[branchKey].views}
                      </td>
                      <td className="border px-4 py-2 text-gray-800">
                        {story.layers[branchKey].timeSpent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyStories;
