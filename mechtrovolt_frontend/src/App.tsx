import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import "./App.css";
import ContactUs from "./screens/ContactUs/ContactUs";
import AboutUs from "./screens/AboutUs";
import Partnerships from "./screens/Partnerships";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route path="/home/" element={<LandingScreen />} />
        <Route path="/contact/" element={<ContactUs />} />
        <Route path="/partnerships/" element={<Partnerships />} />
      </Routes>
    </Router>
  );
};

export default App;
