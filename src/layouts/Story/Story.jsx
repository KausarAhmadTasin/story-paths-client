import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Story = () => {
  const story = useLoaderData();
  const [secondBranch, setSecondBranch] = useState(null);
  const [secondBranchName, setSecondBranchName] = useState("");
  const [thirdBranch, setThirdBranch] = useState(null);
  const [thirdBranchName, setThirdBranchName] = useState("");

  const startTime = useRef(null);

  // Memoize trackTimeSpent with useCallback
  const trackTimeSpent = useCallback(
    (branchName) => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime.current) / 1000);
      console.log(`Tracking time for ${branchName}: ${timeSpent} seconds`); // Debug log
      axios
        .post(`http://localhost:5000/api/stories/${story._id}/updateTime`, {
          branchName,
          timeSpent,
        })
        .then(() => {
          console.log(`Time tracked for ${branchName}`);
        })
        .catch((err) =>
          console.log(`Error tracking time for ${branchName}:`, err)
        );
      startTime.current = endTime;
    },
    [story._id]
  ); // Add dependencies if needed

  useEffect(() => {
    // Initialize start time when the component mounts
    startTime.current = Date.now();
    console.log("Component mounted, starting timer");

    // Track time spent on first branch
    return () => {
      console.log("Component unmounting, tracking time for branch_1");
      trackTimeSpent("branch_1");
    };
  }, [trackTimeSpent]);

  const handleFirstChoiceClick = (firstChoice) => {
    console.log(`First choice selected: ${firstChoice}`);
    trackTimeSpent("branch_1");
    setSecondBranchName(firstChoice);
    axios
      .get(
        `http://localhost:5000/api/stories/${story._id}?branch=${firstChoice}`
      )
      .then((result) => {
        console.log("Second branch data received:", result.data);
        setSecondBranch(result.data);
        setThirdBranch(null);
        startTime.current = Date.now(); // Reset start time for the second branch
      })
      .catch((err) => {
        console.log("Error fetching second branch:", err);
      });
  };

  const handleSecondChoiceClick = (secondChoice) => {
    const branchName = `branch_${secondChoice.split("_").slice(1).join("_")}`;
    console.log(`Second choice selected: ${secondChoice}`);
    trackTimeSpent(secondBranchName); // Track time for the second branch

    setThirdBranchName(branchName);

    axios
      .get(
        `http://localhost:5000/api/stories/${story._id}?branch=${branchName}`
      )
      .then((result) => {
        console.log("Third branch data received:", result.data);
        setThirdBranch(result.data);
        startTime.current = Date.now(); // Reset start time for the third branch

        // If the third branch has no choices, track time immediately
        if (!result.data.layers[branchName].choices) {
          console.log(
            `No choices in third branch: ${branchName}, tracking time immediately`
          );
          trackTimeSpent(branchName);
        }
      })
      .catch((err) => {
        console.log("Error fetching third branch:", err);
      });
  };

  useEffect(() => {
    // Track time when the component unmounts or the user navigates away from the third branch
    return () => {
      if (thirdBranchName) {
        console.log(
          `Component unmounting, tracking time for ${thirdBranchName}`
        );
        trackTimeSpent(thirdBranchName);
      }
    };
  }, [thirdBranchName, trackTimeSpent]);

  return (
    <div className="min-h-screen pt-16 pb-10 bg-gradient-to-br from-amber-100 via-purple-50 to-indigo-200">
      <Helmet>
        <title>Storypaths | Story</title>
      </Helmet>

      <div className="md:container rounded-xl md:mx-auto mx-4 my-2 bg-white py-6 shadow-xl">
        <div className="w-3/4 mx-auto">
          <h1 className="md:text-4xl text-2xl font-extrabold text-center text-gray-800">
            {story.layers.branch_1?.title}
          </h1>

          <div className="flex md:w-1/3 mx-auto my-4 justify-between">
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

          {/* 
          
                ------  Second branch  ------ 
          
          */}
          {secondBranch && (
            <div>
              <h2 className="md:text-3xl text-2xl mt-16 font-bold text-center text-indigo-700">
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

          {/* 

                ------ Third branch ------ 
          
          */}
          {thirdBranch && (
            <div>
              <h2 className="md:text-3xl text-2xl mt-16 font-bold text-center text-teal-700">
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
