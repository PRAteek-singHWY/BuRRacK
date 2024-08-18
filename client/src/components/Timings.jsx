import { useState, useEffect } from "react";

const Timings = () => {
  const [timings, setTimings] = useState([]);

  useEffect(() => {
    // Fetch bus timings from API
    const fetchTimings = async () => {
      const response = await fetch("/api/bus-timings");
      const data = await response.json();
      setTimings(data);
    };

    fetchTimings();
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Bus Timings</h1>
      <ul className="list-disc pl-5">
        {timings.map((timing) => (
          <li key={timing.id} className="mb-2">
            Bus ID: {timing.id} - {timing.departure} - {timing.arrival}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timings;
