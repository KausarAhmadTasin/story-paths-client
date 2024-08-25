import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";
import { useLoaderData } from "react-router-dom";
import HomeStories from "../../components/HomeStories/HomeStories";
import HomeHowItWorks from "../../components/HomeHowItWorks/HomeHowItWorks";
import HomeCallToAction from "../../components/HomeCallToAction/HomeCallToAction";

const Home = () => {
  const stories = useLoaderData();

  return (
    <div className="md:container md:pt-10 pt-5 md:mx-auto mx-2 min-h-screen">
      <Helmet>
        <title>StoryPaths | Home</title>
      </Helmet>

      <Hero />

      <HomeStories stories={stories} />

      <HomeHowItWorks />

      <HomeCallToAction />
    </div>
  );
};

export default Home;
