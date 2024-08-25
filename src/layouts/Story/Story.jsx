import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Story = () => {
  const story = useLoaderData();
  const [secondBranch, setSecondBranch] = useState(null);
  const [secondBranchName, setSecondBranchName] = useState("");
  const [thirdBranch, setThirdBranch] = useState(null);
  const [thirdBranchName, setThirdBranchName] = useState("");

  const handleFirstChoiceClick = (firstChoice) => {
    setSecondBranchName(firstChoice);
    axios
      .get(
        `http://localhost:5000/api/stories/${story._id}?branch=${firstChoice}`
      )
      .then((result) => {
        setSecondBranch(result.data);
        setThirdBranch(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSecondChoiceClick = (secondChoice) => {
    const branchName = `branch_${secondChoice.split("_").slice(1).join("_")}`;
    setThirdBranchName(branchName);

    axios
      .get(
        `http://localhost:5000/api/stories/${story._id}?branch=${branchName}`
      )
      .then((result) => {
        setThirdBranch(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen pt-16 pb-10 bg-gradient-to-br from-amber-200 via-purple-100 to-indigo-400">
      <div className="container rounded-xl mx-auto my-2 bg-white py-6 shadow-xl">
        <div className="w-3/4 mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            {story.layers.branch_1?.title}
          </h1>
          <div className="flex w-1/3 mx-auto my-4 justify-between">
            <p className="font-semibold text-gray-700">
              Author: <span className="font-normal">{story.author}</span>
            </p>
            <p className="font-semibold text-gray-700">
              Views:{" "}
              <span className="font-normal">
                {story.layers.branch_1?.views}
              </span>
            </p>
          </div>
          <p className="my-4 mt-6 mx-auto text-lg text-gray-700">
            {story.layers.branch_1?.storyLine}
          </p>
          <h3 className="font-semibold mt-8 text-center text-gray-900">
            Choose next progression
          </h3>
          <div className="text-center flex gap-x-4 justify-center my-4">
            <p
              onClick={() => handleFirstChoiceClick("branch_1_1")}
              className="border px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 font-medium hover:scale-105 hover:cursor-pointer transition-transform"
            >
              {story.layers.branch_1?.choices?.choice_1_1}
            </p>
            <p
              onClick={() => handleFirstChoiceClick("branch_1_2")}
              className="border px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 font-medium hover:scale-105 hover:cursor-pointer transition-transform"
            >
              {story.layers.branch_1?.choices?.choice_1_2}
            </p>
          </div>

          {/* Second branch */}
          {secondBranch && (
            <div>
              <h2 className="text-3xl mt-16 font-bold text-center text-indigo-700">
                {secondBranch.layers[secondBranchName]?.title}
              </h2>
              <p className="font-semibold text-center mt-2 text-gray-700">
                Views:{" "}
                <span className="font-normal">
                  {secondBranch.layers[secondBranchName]?.views}
                </span>
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {secondBranch.layers[secondBranchName]?.storyLine}
              </p>
              <h3 className="font-semibold mt-6 text-center text-gray-900">
                Choose next progression
              </h3>
              <div className="text-center flex gap-x-4 justify-center my-4">
                {secondBranch.layers[secondBranchName]?.choices && (
                  <>
                    {Object.entries(
                      secondBranch.layers[secondBranchName].choices
                    ).map(([key, choice]) => (
                      <p
                        key={key}
                        onClick={() => handleSecondChoiceClick(key)}
                        className="border px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 font-medium hover:scale-105 hover:cursor-pointer transition-transform"
                      >
                        {choice}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Third branch */}
          {thirdBranch && (
            <div>
              <h2 className="text-3xl mt-16 font-bold text-center text-teal-700">
                {thirdBranch.layers[thirdBranchName]?.title}
              </h2>
              <p className="font-semibold text-center mt-2 text-gray-700">
                Views:{" "}
                <span className="font-normal">
                  {thirdBranch.layers[thirdBranchName]?.views}
                </span>
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {thirdBranch.layers[thirdBranchName]?.storyLine}
              </p>
              <p className="text-2xl font-bold text-center mt-6 animate-bounce text-teal-500">
                The End!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
