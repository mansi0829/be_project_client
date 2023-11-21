import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Search from "./Search";

function App() {
  return (
    <div className="font-nunito">
      <div className="min-h-screen bg-gradient-to-r from-slate-900 via-gray-700 to-gray-800 text-gray-50">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
