const HomeCallToAction = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section className="mt-20 bg-indigo-300 my-10 rounded-md text-white py-10">
        <h2 className="text-3xl text-center font-bold mb-8">Join Us Today</h2>
        <p className="text-center mb-8">
          Become a part of the StoryPaths community and start exploring stories
          like never before.
        </p>
        <div className="flex justify-center">
          <a
            href="/register"
            className="bg-white text-indigo-500 font-medium hover:bg-gray-100 px-6 py-3 rounded shadow-md"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeCallToAction;
