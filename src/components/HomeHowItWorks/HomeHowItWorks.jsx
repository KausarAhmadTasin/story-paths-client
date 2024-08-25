const HomeHowItWorks = () => {
  return (
    <div>
      {/* How It Works Section */}
      <section className="mt-20">
        <h2 className="text-3xl text-center font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-purple-100 shadow-md rounded">
            <h3 className="text-xl font-semibold mb-4">Browse Stories</h3>
            <p className="text-gray-700">
              Explore our vast collection of stories by category or popularity.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-100 shadow-md rounded">
            <h3 className="text-xl font-semibold mb-4">Read & Choose</h3>
            <p className="text-gray-700">
              Read the stories and make choices to navigate through different
              paths.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-100 shadow-md rounded">
            <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
            <p className="text-gray-700">
              Create and share your own stories with the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHowItWorks;
