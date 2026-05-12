import "../App.css";
import "./HomePage.css";
import ThemeCard from "../components/ThemeCard";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-left">
        <h1 className="home-title">
          Welkom op deze AI-<br />informatiepagina
        </h1>

        <p className="home-text">
          Deze website is speciaal ontwikkeld voor zorgprofessionals die meer willen begrijpen van AI,
          op hun eigen tempo en op een manier die bij hen past.
          <br />
          De website is opgebouwd rond drie hoofdthema&apos;s:
        </p>

        <div className="home-themes">

          <ThemeCard
            title="Wat is AI?"
            colorClassName="theme-icon-blue"
            onClick={() => navigate("/wat-is-ai")}
          />

          <ThemeCard
            title="Taalmodellen"
            colorClassName="theme-icon-orange"
            onClick={() => navigate("/taalmodellen")}
          />

          <ThemeCard
            title="Mogelijkheden"
            colorClassName="theme-icon-green"
            onClick={() => navigate("/mogelijkheden")}
          />

        </div>

        <p className="home-text">
          Je kunt vrij scrollen door de thema&apos;s heen en zelf kiezen welke onderdelen je interessant vindt,
          hoe dieper je gaat hoe dieper de informatie over het thema. Niets is verplicht.
        </p>

        <p className="home-text-bold">
          Dus klik verder en ontdek de verschillende thema&apos;s.
        </p>
      </div>

      <div className="home-right">
        <div className="image-placeholder">Hier komt later een afbeelding</div>
        <div className="next-button">→</div>
      </div>
    </div>
  );
}