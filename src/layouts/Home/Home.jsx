import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="container pt-10 mx-auto">
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
