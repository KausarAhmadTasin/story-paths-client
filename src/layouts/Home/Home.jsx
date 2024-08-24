import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="md:container pt-10 md:mx-auto mx-2 min-h-screen">
      <Hero />
      {/* 
      ----------- stories --------------
      
      */}

      <div>
        <h1 className="text-3xl text-center font-bold mt-20">Read Stories</h1>
      </div>
    </div>
  );
};

export default Home;
