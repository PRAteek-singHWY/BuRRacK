import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const LearnMore = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-r from-blue-900 via-black to-blue-900 flex flex-col items-center text-[#d1bca7] px-6 py-12">
      <div
        className="absolute top-4 left-4 
  rounded-full bg-[#efd2b7]
  text-blue-900 hover:text-[#e5d0bc] hover:bg-blue-700 
  border border-blue-700 
  hover:border-[#e5d0bc] p-2"
      >
        <Link
          to="/"
          className=" text-xl  p-4 
          rounded-full font-semibold
          "
        >
          Home
        </Link>
      </div>
      <h1 className="text-5xl font-bold mb-8 mt-14">
        Learn More About Burrack
      </h1>

      <div
        className="list-disc space-y-4 max-w-4xl   text-[20px] ml-[25px] flex flex-col  bg-[#f0dfcd] 
       h-full rounded-[25px] mt-[105px] "
      >
        <div className="flex flex-row   ">
          <p className="m-[28px] h-full w-full ml-[25px] rounded-[20px] text-[#edceae] text-justify p-6 bg-gradient-to-r from-blue-600 via-black to-blue-600 hover ">
            <strong className="">Live Bus Tracking:</strong> Show the live
            location of buses on a map, updated in real-time.
          </p>

          <p className="m-[28px] h-full w-full ml-[25px] rounded-[20px] text-[#edceae] text-justify p-6 bg-gradient-to-r from-blue-600 via-black to-blue-600 hover ">
            <strong>Bus Timings:</strong> Display departure and arrival timings
            for buses traveling between the micro and macro campuses.
          </p>
        </div>

        <div className="flex flex-row ">
          <p className="m-[25px] h-full w-full ml-[25px] rounded-[20px] text-[[#edceae] text-justify p-6 bg-gradient-to-r from-blue-600 via-black to-blue-600 hover ">
            <strong>Push Notifications:</strong> Notify students of any changes
            in bus departure or arrival times.
          </p>

          <p className="m-[20px] h-full w-full ml-[25px] rounded-[20px] text-[#edceae] text-justify p-6 bg-gradient-to-r from-blue-600 via-black to-blue-600 hover ">
            <strong>Contact Information:</strong> Provides contact details for
            emergencies, such as student wardens and relevant WhatsApp groups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
