const Write = () => {
  const handleStorySubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-16 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-7">
        Write an Interactive Story
      </h1>{" "}
      <form className="py-6 px-10 mx-10 border rounded-xl bg-[#F2ECE2]">
        {/* Level 1 */}
        <div className="mb-8">
          <h2 className="text-2xl text-center font-bold mb-4">1. Title</h2>
          <input
            type="text"
            placeholder="Enter 1. Title"
            className="w-full p-2 border rounded mb-4"
          />
          <h2 className="text-2xl text-center font-bold mb-4">1. Story Line</h2>
          <textarea
            placeholder="Story Line"
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Level 1.1 */}
        <div className="mb-8">
          <h3 className="text-xl text-center font-bold mb-4">1.1: Title</h3>
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full p-2 border rounded mb-4"
          />
          <h3 className="text-xl text-center font-bold mb-4">
            1.1: Story Line
          </h3>
          <textarea
            placeholder="Story Line"
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-center gap-x-5">
          {/* Level 1.1.1 */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-bold mb-4">1.1.1: Title</h4>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full p-2 border rounded mb-4"
            />
            <h4 className="text-lg font-bold mb-4">1.1.1: Story Line</h4>
            <textarea
              placeholder="Story Line"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>

          {/* Level 1.1.2 */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-bold mb-4">1.1.2: Title</h4>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full p-2 border rounded mb-4"
            />
            <h4 className="text-lg font-bold mb-4">1.1.2: Story Line</h4>
            <textarea
              placeholder="Story Line"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Level 1.2 */}
        <div className="mb-8">
          <h3 className="text-xl text-center font-bold mb-4">1.2: Title</h3>
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full p-2 border rounded mb-4"
          />
          <h3 className="text-xl text-center font-bold mb-4">
            1.2: Story Line
          </h3>
          <textarea
            placeholder="Story Line"
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-center gap-x-5">
          {/* Level 1.2.1 */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-bold mb-4">1.2.1: Title</h4>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full p-2 border rounded mb-4"
            />
            <h4 className="text-lg font-bold mb-4">1.2.1: Story Line</h4>
            <textarea
              placeholder="Story Line"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>

          {/* Level 1.2.2 */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-bold mb-4">1.2.2: Title</h4>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full p-2 border rounded mb-4"
            />
            <h4 className="text-lg font-bold mb-4">1.2.2: Story Line</h4>
            <textarea
              placeholder="Story Line"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 w-full duration-200 active:scale-95 font-medium bg-green-600 text-white rounded"
          onClick={handleStorySubmit}
        >
          Save Story
        </button>
      </form>
      s
    </div>
  );
};

export default Write;
