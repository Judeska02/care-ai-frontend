import { useNavigate } from "react-router-dom";
import "./MenuOverlay.css";

type MenuOverlayProps = {
  onClose: () => void;
};

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const navigate = useNavigate();

  return (
    <div className="menu-overlay">
      <button
        className="menu-home-button"
        type="button"
        onClick={() => navigate("/")}
        aria-label="Ga naar home"
      >
        Home
      </button>

      <button
        className="menu-close-button"
        type="button"
        onClick={onClose}
        aria-label="Sluit menu"
      >
        ×
      </button>

      <div className="menu-overlay-content">
        <button onClick={() => navigate("/wat-is-ai")}>Wat is ai?</button>
        <button onClick={() => navigate("/taalmodellen")}>Taalmodellen</button>
        <button onClick={() => navigate("/mogelijkheden")}>Mogelijkheden</button>
        <button onClick={() => navigate("/extra")}>Extra’s</button>
      </div>
    </div>
  );
}