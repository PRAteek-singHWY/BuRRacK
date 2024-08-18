import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Contact = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-r from-blue-900 via-black to-blue-900 flex flex-col items-center text-[#c2a282] px-6 py-12">
      <div
        className="absolute top-4 left-4 
  rounded-full bg-[#e5d0bc]
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

      <h1 className="text-4xl font-bold mb-8 text-center text-[#c2a282]">
        Contact Information
      </h1>

      <div className="mb-8 w-full max-w-md bg-gradient-to-r from-blue-600 via-black to-blue-600  bg-opacity-40 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">WhatsApp Group</h2>
        <a
          href="https://chat.whatsapp.com/your-group-link"
          className="text-green-400 hover:underline"
        >
          <li>Join our WhatsApp Group</li>
        </a>
      </div>

      <div className="w-full max-w-md bg-gradient-to-r from-blue-600 via-black to-blue-600  bg-opacity-40 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Numbers</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Student Warden: <span className="text-[#e5d0bc]">123-456-7890</span>
          </li>
          <li>
            Emergency Contact:{" "}
            <span className="text-[#e5d0bc]">098-765-4321</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
