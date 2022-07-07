import Navbar from "./components/layout/Navbar";
import MensaSearch from "./components/Mensen/MensaSearch";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mensen from "./pages/Mensen";
import MensaProfile from "./components/Mensen/MensaProfile";

function App() {
  return (
    <div>
        <Navbar />

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mensen" element={<Mensen />} />
                <Route path="/mensa/:id" element={<MensaProfile />} />
            </Routes>
        </Router>

        <ToastContainer />
    </div>
  );
}

export default App;
