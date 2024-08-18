import { useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "../index.css";

const Auth = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/starter-nav");
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-r from-blue-900 via-black to-blue-900">
      <div className="absolute w-full inset-0 flex flex-col items-center">
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5d0a8] font-bold mt-28 sm:mt-32 md:mt-40 lg:mt-32">
            BuRRacK
          </h1>
        </div>

        {/* Live line for saying something about the app */}
        <p className="text-[#edcead] w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex items-center justify-center whitespace-nowrap mt-44 sm:mt-52 md:mt-64 lg:mt-40">
          <ReactTypingEffect
            text={[
              "Effortless Planning ...",
              "Seamless Rides ...",
              "Real-Time Tracking ...",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
        </p>

        <div className="absolute flex flex-col justify-center mt-[540px] sm:mt-[650px] md:mt-[730px] lg:mt-[700px]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#efcdaa] font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Plan It, Ride It
          </p>
          {/* Button for getting access */}
          <div className="flex flex-row justify-center space-x-4">
            <button
              className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 bg-[#eae5e0] border-[#eae5e0] rounded-full text-blue-800 hover:bg-blue-700 hover:text-[#eae5e0]"
              onClick={signInHandler}
            >
              Get Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
