import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import SuggestionThanks from "./pages/SuggestionThanks";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Bands from "./pages/Bands";
import Schedule from "./pages/Schedule";
import SongRequests from "./pages/SongRequests"
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router basename="/">
      <ScrollToTop />
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song-requests" element={<SongRequests />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/bio" element={<Bio />}></Route>
            <Route path="/bands" element={<Bands />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/thanks" element={<Thanks />} />
            <Route
              path="/thanks-for-your-suggestion"
              element={<SuggestionThanks />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
