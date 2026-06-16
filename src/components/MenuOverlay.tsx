import { useNavigate } from "react-router-dom";
import "./MenuOverlay.css";

import homeIcon from "../assets/menu/home-icon.png";
import watIsAiIcon from "../assets/menu/watisai-icon.png";
import taalmodellenIcon from "../assets/menu/taalmodellen-icon.png";
import mogelijkhedenIcon from "../assets/menu/mogelijkheden-icon.png";

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
        <img src={homeIcon} alt="Home" />
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
        <button onClick={() => navigate("/wat-is-ai")}>
          <img src={watIsAiIcon} alt="Wat is AI" />
          <span>Wat is ai?</span>
        </button>

        <button onClick={() => navigate("/taalmodellen")}>
          <img src={taalmodellenIcon} alt="Taalmodellen" />
          <span>Taalmodellen</span>
        </button>

        <button onClick={() => navigate("/mogelijkheden")}>
          <img src={mogelijkhedenIcon} alt="Mogelijkheden" />
          <span>Mogelijkheden</span>
        </button>

        <button onClick={() => navigate("/extra")}>
          <div className="menu-placeholder-icon"></div>
          <span>Extra’s</span>
        </button>
      </div>
    </div>
  );
}