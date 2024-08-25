import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Write = () => {
  const { user } = useContext(AuthContext);

  const handleStorySubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // prettier-ignore
    const story = {
      author: user?.displayName || "",
      author_email: user?.email || "",
      
      layers: {
        "1": {
          title: form.title_1.value,
          storyLine: form.story_1.value,
          choices: {
            choice_1_1: form.choice_1_1.value,
            choice_1_2: form.choice_1_2.value,
          },
          views: 0,
          timeSpent: 0,
        },
        "1_1": {  
          title: form.title_1_1.value,
          storyLine: form.story_1_1.value,
          choices: {
            choice_1_1_1: form.choice_1_1_1.value,
            choice_1_1_2: form.choice_1_1_2.value,
          },
          views: 0,
          timeSpent: 0,
        },
        "1_1_1": {
          title: form.title_1_1_1.value,
          storyLine: form.story_1_1_1.value,
          views: 0,
          timeSpent: 0,
        },
        "1_1_2": {
          title: form.title_1_1_2.value,
          storyLine: form.story_1_1_2.value,
          views: 0,
          timeSpent: 0,
        },
        "1_2": {
          title: form.title_1_2.value,
          storyLine: form.story_1_2.value,
          choices: {
            choice_1_2_1: form.choice_1_2_1.value,
            choice_1_2_2: form.choice_1_2_2.value,
          },
          views: 0,
          timeSpent: 0,
        },
        "1_2_1": {
          title: form.title_1_2_1.value,
          storyLine: form.story_1_2_1.value,
          views: 0,
          timeSpent: 0,
        },
        "1_2_2": {
          title: form.title_1_2_2.value,
          storyLine: form.story_1_2_2.value,
          views: 0,
          timeSpent: 0,
        },
      },
    };

    axios
      .post("http://localhost:5000/api/stories", story)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Story Published Successfully!");
          form.reset();
        }
      })
      .catch(() => {
        toast.error("Could not publish!");
      });
  };

  return (
    <div className="md:mt-16 mt-20 lg:container mb-10 lg:mx-auto min-h-screen">
      <Helmet>
        <title>Storypaths | Write</title>
      </Helmet>
      <ToastContainer />

      <h1 className="text-3xl font-bold text-center mb-7">
        Write an Interactive Story
      </h1>
      <form
        onSubmit={handleStorySubmit}
        className="md:mx-10 mx-3 border rounded-xl bg-white p-6 shadow-lg"
      >
        {/* 
        
                ---------- Layer 1 ------------

        */}

        <div className="mb-8 border rounded-lg p-6 bg-blue-50 shadow-md">
          <h3 className="text-2xl text-center font-semibold mb-4 text-gray-700">
            Title & Story Line
          </h3>
          <div className="mb-4">
            <label
              className="block text-lg font-semibold mb-2 text-gray-600"
              htmlFor="title_1"
            >
              Title
            </label>
            <input
              type="text"
              id="title_1"
              placeholder="Enter Title for Layer 1"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="title_1"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-semibold mb-2 text-gray-600"
              htmlFor="story_1"
            >
              Story Line
            </label>
            <textarea
              id="story_1"
              placeholder="Enter Story Line for Layer 1"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              name="story_1"
              required
            ></textarea>
          </div>

          <div className="flex w-full gap-x-4">
            <div className="mb-4 w-full">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="choice_1_1"
              >
                Choice for 1.1
              </label>
              <input
                type="text"
                id="choice_1_1"
                placeholder="Enter choice 1 for Layer 1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="choice_1_1"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="choice_1_2"
              >
                Choice for 1.2
              </label>
              <input
                type="text"
                id="choice_1_2"
                placeholder="Enter choice 2 for Layer 1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="choice_1_2"
                required
              />
            </div>
          </div>
        </div>

        {/* 
        
                ---------- Layer 2 ------------

        */}
        <div className="flex flex-col md:flex-row w-full gap-x-4 justify-between">
          {/* Level 1.1 */}
          <div className="mb-8 bg-green-50 p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl text-center font-semibold mb-4 text-gray-700">
              1.1: Title & Story Line
            </h3>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_1"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_1"
                placeholder="Enter Title for Layer 1.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                name="title_1_1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_1"
              >
                Story Line
              </label>
              <textarea
                id="story_1_1"
                placeholder="Enter Story Line for Layer 1.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                name="story_1_1"
                required
              ></textarea>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  className="block text-lg font-semibold mb-2 text-gray-600"
                  htmlFor="choice_1_1_1"
                >
                  Choice for 1.1.1
                </label>
                <input
                  type="text"
                  id="choice_1_1_1"
                  placeholder="Enter choice 1 for Layer 1.1"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="choice_1_1_1"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-lg font-semibold mb-2 text-gray-600"
                  htmlFor="choice_1_1_2"
                >
                  Choice for 1.1.2
                </label>
                <input
                  type="text"
                  id="choice_1_1_2"
                  placeholder="Enter choice 2 for Layer 1.1"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="choice_1_1_2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Level 1.2 */}
          <div className="mb-8 bg-yellow-50 p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl text-center font-semibold mb-4 text-gray-700">
              1.2: Title & Story Line
            </h3>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_2"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_2"
                placeholder="Enter Title for Layer 1.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                name="title_1_2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_2"
              >
                Story Line
              </label>
              <textarea
                id="story_1_2"
                placeholder="Enter Story Line for Layer 1.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                name="story_1_2"
                required
              ></textarea>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  className="block text-lg font-semibold mb-2 text-gray-600"
                  htmlFor="choice_1_2_1"
                >
                  Choice for 1.2.1
                </label>
                <input
                  type="text"
                  id="choice_1_2_1"
                  placeholder="Enter choice 1 for Layer 1.2"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  name="choice_1_2_1"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-lg font-semibold mb-2 text-gray-600"
                  htmlFor="choice_1_2_2"
                >
                  Choice for 1.2.2
                </label>
                <input
                  type="text"
                  id="choice_1_2_2"
                  placeholder="Enter choice 2 for Layer 1.2"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  name="choice_1_2_2"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* 

                ---------- Layer 3 ------------

        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Level 1.1.1 */}
          <div className="p-6 border rounded-lg bg-green-50 shadow-md">
            <h4 className="text-lg text-center font-semibold mb-4 text-gray-700">
              1.1.1: Title & Story Line
            </h4>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_1_1"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_1_1"
                placeholder="Enter Title for Layer 1.1.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                name="title_1_1_1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_1_1"
              >
                Story Line
              </label>
              <textarea
                id="story_1_1_1"
                placeholder="Enter Story Line for Layer 1.1.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                name="story_1_1_1"
                required
              ></textarea>
            </div>
          </div>

          {/* Level 1.1.2 */}
          <div className="p-6 border rounded-lg bg-green-50 shadow-md">
            <h4 className="text-lg text-center font-semibold mb-4 text-gray-700">
              1.1.2: Title & Story Line
            </h4>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_1_2"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_1_2"
                placeholder="Enter Title for Layer 1.1.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="title_1_1_2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_1_2"
              >
                Story Line
              </label>
              <textarea
                id="story_1_1_2"
                placeholder="Enter Story Line for Layer 1.1.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                name="story_1_1_2"
                required
              ></textarea>
            </div>
          </div>

          {/* Level 1.2.1 */}
          <div className="p-6 border rounded-lg bg-yellow-50 shadow-md">
            <h4 className="text-lg text-center font-semibold mb-4 text-gray-700">
              1.2.1: Title & Story Line
            </h4>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_2_1"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_2_1"
                placeholder="Enter Title for Layer 1.2.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                name="title_1_2_1"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_2_1"
              >
                Story Line
              </label>
              <textarea
                id="story_1_2_1"
                placeholder="Enter Story Line for Layer 1.2.1"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
                name="story_1_2_1"
                required
              ></textarea>
            </div>
          </div>

          {/* Level 1.2.2 */}
          <div className="p-6 border rounded-lg bg-yellow-50 shadow-md">
            <h4 className="text-lg text-center font-semibold mb-4 text-gray-700">
              1.2.2: Title & Story Line
            </h4>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="title_1_2_2"
              >
                Title
              </label>
              <input
                type="text"
                id="title_1_2_2"
                placeholder="Enter Title for Layer 1.2.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="title_1_2_2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2 text-gray-600"
                htmlFor="story_1_2_2"
              >
                Story Line
              </label>
              <textarea
                id="story_1_2_2"
                placeholder="Enter Story Line for Layer 1.2.2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="4"
                name="story_1_2_2"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md w-full hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
            value="Publish"
          />
        </div>
      </form>
    </div>
  );
};

export default Write;
