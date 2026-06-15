import "./PageHeader.css";
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";

type PageHeaderProps = {
  logo: string;
  logoAlt: string;
  activeDot: 1 | 2 | 3;
  onMenuClick: () => void;
  logoWidth?: number;
};

export default function PageHeader({
  logo,
  logoAlt,
  activeDot,
  onMenuClick,
  logoWidth = 60,
}: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      <div className="page-header-logo">
        <img src={logo} alt={logoAlt} style={{ width: `${logoWidth}px` }} />
      </div>

      <div className="page-header-dots">
        <button
          className={`dot ${activeDot === 1 ? "active" : ""}`}
          onClick={() => navigate("/wat-is-ai")}
          aria-label="Ga naar Wat is AI"
        ></button>

        <button
          className={`dot ${activeDot === 2 ? "active" : ""}`}
          onClick={() => navigate("/taalmodellen")}
          aria-label="Ga naar Taalmodellen"
        ></button>

        <button
          className={`dot ${activeDot === 3 ? "active" : ""}`}
          onClick={() => navigate("/mogelijkheden")}
          aria-label="Ga naar Mogelijkheden"
        ></button>
      </div>

      <div className="page-header-menu">
        <MenuButton onClick={onMenuClick} />
      </div>
    </header>
  );
}