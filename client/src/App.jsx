import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import SignUpIn from "./components/SignUpIn";
import NavBarScr from "./components/NavBarScr";
import RouteTrack from "./components/RouteTrack";
import Timings from "./components/Timings";
import Contact from "./components/Contact";
import LearnMore from "./components/LearnMore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup-in" element={<SignUpIn />} />
        <Route path="/starter-nav" element={<NavBarScr />} />
        <Route path="/liveroute" element={<RouteTrack />} />
        <Route path="/schedule" element={<Timings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
