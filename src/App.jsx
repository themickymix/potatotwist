import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Footer from "./section/Footer";
function App() {
  return (
    <div>
        <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
