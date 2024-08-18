import { useNavigate } from "react-router-dom";
const Home = () => {
  //use Navigate hook is used to navigate to various routes therefore we imported it to navigate within various routes within our app
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };
  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-r from-blue-900 via-black to-blue-900">
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-bold text-[#f0dac2] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Welcome to BuRRack
        </h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          Track your bus in real-time, know the exact departure times, and plan
          your journey efficiently. Burrack makes campus commuting simple and
          reliable.
        </p>
        <div className="flex flex-row space-x-4">
          <button
            className="px-6 py-3 bg-blue-700 text-white rounded-full
           hover:bg-blue-800 "
            onClick={handleGetStarted}
          >
            Get Started
          </button>

          <button
            className="px-6 py-3 bg-transparent border-2 border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
