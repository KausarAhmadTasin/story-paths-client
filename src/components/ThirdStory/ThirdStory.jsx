import { useEffect } from "react";
import axios from "axios";

const ThirdthirdBranch = ({ branchName, thirdBranch, trackTimeSpent }) => {
  //   const thirdBranch = thirdBranch.layers[branchName];

  useEffect(() => {
    if (thirdBranch) {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime.current) / 1000);
      console.log(`Tracking time for ${branchName}: ${timeSpent} seconds`); // Debug log
      axios
        .post(
          `http://localhost:5000/api/stories/${thirdBranch._id}/updateTime`,
          {
            branchName,
            timeSpent,
          }
        )
        .then(() => {
          console.log(`Time tracked for ${branchName}`);
        })
        .catch((err) =>
          console.log(`Error tracking time for ${branchName}:`, err)
        );

      // Optional: Track time immediately if no choices
      if (!thirdBranch.choices) {
        trackTimeSpent(branchName);
      }
    }
  }, [branchName, thirdBranch, thirdBranch._id, trackTimeSpent]);

  return (
    <div>
      <h2 className="md:text-3xl text-2xl mt-16 font-bold text-center text-teal-700">
        {thirdBranch?.title}
      </h2>
      <p className="font-semibold text-center mt-2 text-gray-700">
        Views: <span className="font-normal">{thirdBranch?.views}</span>
      </p>
      <p className="mt-4 text-lg text-gray-700">
        {thirdBranch?.thirdBranchLine}
      </p>
      <p className="text-2xl font-bold text-center mt-6 animate-bounce text-teal-500">
        The End!
      </p>
    </div>
  );
};

export default ThirdthirdBranch;
