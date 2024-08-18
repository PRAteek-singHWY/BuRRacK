// This component is completely Chat-GPT generated
// not merged in with any backend

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Example with Leaflet
import "leaflet/dist/leaflet.css";

const Routes = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch live bus locations from API
    const fetchBusLocations = async () => {
      const response = await fetch("/api/bus-locations");
      const data = await response.json();
      setBuses(data);
    };

    fetchBusLocations();
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Live Bus Tracking</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buses.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lon]}>
            <Popup>
              Bus ID: {bus.id}
              <br />
              Location: {bus.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Bus Timings</h2>
        {/* Render timings here */}
      </div>
    </section>
  );
};

export default Routes;
