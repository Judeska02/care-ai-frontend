import { useState } from "react";
import "./ExtraPage.css";
import { useNavigate } from "react-router-dom";
import MenuButton from "../components/MenuButton";
import MenuOverlay from "../components/MenuOverlay";

import extraIcon from "../assets/extra/extra-icon.png";
import promptBoekje from "../assets/extra/prompt-boekje.png";

export default function ExtraPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [deliveryType, setDeliveryType] = useState<"online" | "fysiek">("online");

  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [adres, setAdres] = useState("");
  const [stad, setStad] = useState("");

  const lettersOnly = /^[A-Za-zÀ-ÿ\s'-]+$/;
  const addressRegex = /^[A-Za-zÀ-ÿ0-9\s]+$/;

  return (
    <main className="extra-page">
      {menuOpen && (
          <MenuOverlay onClose={() => setMenuOpen(false)} />
        )}

      <div>
        <img src={extraIcon} alt="Extra pagina logo" className="extra-logo-placeholder"/>
      </div>

      <MenuButton onClick={() => setMenuOpen(true)} />

      <button
        className="arrow left"
        onClick={() => navigate("/mogelijkheden")}
        aria-label="Ga terug"
      >
        &#8249;
      </button>

      <section className="extra-content">
        <div className="extra-left">
          <h1>Vraag hier jou ‘How To Prompt’ boekje aan!</h1>

          <div>
            <img src={promptBoekje} alt="How To Prompt boekje" className="extra-book-placeholder"/>
          </div>
        </div>

        <div className="extra-choice">
          <button
            className={`extra-choice-button ${deliveryType === "online" ? "active" : ""}`}
            type="button"
            onClick={() => setDeliveryType("online")}
          >
            Online
          </button>

          <button
            className={`extra-choice-button ${deliveryType === "fysiek" ? "active" : ""}`}
            type="button"
            onClick={() => setDeliveryType("fysiek")}
          >
            Fysiek
          </button>
        </div>

        <form className="extra-form">
          <div>
            <input
              type="text"
              placeholder="Voornaam"
              value={voornaam}
              onChange={(e) => setVoornaam(e.target.value)}
            />

            {voornaam && !lettersOnly.test(voornaam) && (
              <p className="error-message">
                Alleen letters toegestaan
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Achternaam"
              value={achternaam}
              onChange={(e) => setAchternaam(e.target.value)}
            />

            {achternaam && !lettersOnly.test(achternaam) && (
              <p className="error-message">
                Alleen letters toegestaan
              </p>
            )}
          </div>

          {deliveryType === "online" ? (
            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {email && !email.includes("@") && (
                <p className="error-message">
                  E-mail moet een @ bevatten
                </p>
              )}
            </div>
          ) : (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Adres"
                  value={adres}
                  onChange={(e) => setAdres(e.target.value)}
                />

                {adres && !addressRegex.test(adres) && (
                  <p className="error-message">
                    Alleen letters en cijfers toegestaan
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Stad"
                  value={stad}
                  onChange={(e) => setStad(e.target.value)}
                />

                {stad && !lettersOnly.test(stad) && (
                  <p className="error-message">
                    Alleen letters toegestaan
                  </p>
                )}
              </div>
            </>
          )}
        </form>
      </section>
    </main>
  );
}