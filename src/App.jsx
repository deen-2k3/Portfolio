import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeedbackFab from "./components/FeedbackFab";
import ChatBot from "./components/ChatBot";
import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init({ once: true });
 }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <FeedbackFab />
      <ChatBot />
    </>
  );
};

export default App;
