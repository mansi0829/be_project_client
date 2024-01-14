import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./Component/Navbar";
import { Footer } from "./Component/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer, toast } from "react-toastify";
import Deploay from "./Pages/Deploay";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="font-nunito">
      <div className="bg-gray-900 text-gray-50">
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/deploy" element={<Deploay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
