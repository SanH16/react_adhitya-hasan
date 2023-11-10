import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ImageGenerator from "../components/image-generator";
import EmojiChatbot from "../components/emoji-chatbot";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imageai" element={<ImageGenerator />} />
        <Route path="/emoji-ai" element={<EmojiChatbot />} />
      </Routes>
    </Router>
  );
}
