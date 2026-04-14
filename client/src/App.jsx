import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AddFeedback from "./components/pages/AddFeedback.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-feedback" element={<AddFeedback />} />
    </Routes>
  );
}

export default App;