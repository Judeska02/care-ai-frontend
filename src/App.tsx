import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WatIsAIPage from "./pages/WatIsAIPage";
import TaalmodellenPage from "./pages/TaalmodellenPage";
import MogelijkhedenPage from "./pages/MogelijkhedenPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wat-is-ai" element={<WatIsAIPage />} />
        <Route path="/taalmodellen" element={<TaalmodellenPage />} />
        <Route path="/mogelijkheden" element={<MogelijkhedenPage />} />
      </Routes>
    </BrowserRouter>
  );
}