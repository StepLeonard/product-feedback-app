// we import Routes and Route so we can make pages
import { Routes, Route } from "react-router-dom";

// we import our pages
import Home from "./components/pages/Home.jsx";
import AddFeedback from "./components/pages/AddFeedback.jsx";

// this decides which page shows
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-feedback" element={<AddFeedback />} />
    </Routes>
  );
}

export default App;