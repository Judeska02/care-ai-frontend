import "./ExtraPage.css";
import { useNavigate } from "react-router-dom";

export default function ExtraPage() {
  const navigate = useNavigate();

  return (
    <div className="extra-page">
      <h1>ExtraPage</h1>

      <button onClick={() => navigate("/mogelijkheden")}>
        Terug naar Mogelijkheden
      </button>
    </div>
  );
}