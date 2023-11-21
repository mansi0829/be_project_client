import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home  from "./Home";
import Search from "./Search";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <div className="font-nunito">
      {/* <div className="bg-gradient-to-r from-slate-900 via-gray-700 to-gray-800 text-gray-50"> */}
      <div className="bg-gray-900 text-gray-50">
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
