export default function WatIsAIPage() {
  return (
    <div className="wat-is-ai-page">

      {/* HEADER */}
      <div className="wat-is-ai-header">

        <div className="logo-placeholder">
          LOGO
        </div>

        <div className="progress-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="menu-placeholder">
          MENU
        </div>

      </div>


      {/* HERO CONTENT */}
      <div className="wat-is-ai-content">

        <div className="wat-is-ai-text">
          <h1>
            Stel je voor je komt thuis en vraagt je slimme speaker
            om je favoriete muziek op te zetten.
          </h1>
        </div>

        <div className="wat-is-ai-image">
          AFBEELDING
        </div>

      </div>


      {/* NAVIGATION */}
      <div className="wat-is-ai-navigation">
        <div className="arrow left"> ← </div>
        <div className="arrow right"> →</div>
      </div>


      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator"></div>

      {/* AI UITLEG SECTIE */}
      <section className="ai-explanation-section">

        <div className="ai-scroll-text">
          <p><span>Scroll</span> door deze pagina en leer AI kennen.</p>
          <div className="ai-scroll-arrows">↓↓</div>
        </div>

        <div className="ai-main-layout">

          <div className="ai-middle-column">

            <div className="ai-explanation-content">

              <div className="ai-explanation-left">

                <h2>Wat is AI?</h2>

                <p>
                  AI staat voor artificial intelligence, ook wel kunstmatige intelligentie genoemd.
                  Dat klinkt spannend, maar letterlijk betekent het: een machine die taken kan uitvoeren
                  waar normaal menselijke intelligentie voor nodig is. Denk aan leren, redeneren,
                  beslissingen nemen of taal begrijpen. Maar AI is geen robotbrein dat alles weet.
                </p>

                <div className="ai-quote-box">
                  AI is geen 'robotbrein' dat alles weet.
                </div>

                <p>
                  In plaats daarvan werkt het met grote hoeveelheden data en slimme wiskundige modellen.
                  Het leert patronen herkennen en gebruikt die om voorspellingen te doen of antwoorden te geven.
                  Het is dus niet één soort technologie, maar eerder een verzamelnaam voor systemen die slim gedrag
                  vertonen op basis van data.
                </p>

              </div>

            </div>

            <div className="ai-reminder-row">

              <div className="ai-reminder-card">
                <h3>Goed om te onthouden!</h3>

                <p>
                  AI “denkt” niet zoals een mens dat doet.
                  In deze uitleg worden soms woorden als "leren" of "nadenken" gebruikt om uit te leggen wat AI doet.
                  Maar dat is slechts een manier van spreken.
                  AI heeft geen bewustzijn, gevoelens of begrip.
                  Het “leert” niet zoals een mens leert, het rekent razendsnel met data,
                  ontdekt patronen en voorspelt op basis van die gegevens.
                  Je kunt het beter vergelijken met een rekenmodel dan met een menselijk brein.
                </p>
              </div>

            </div>

          </div>

          <div className="ai-side-illustration">
            AFBEELDING
          </div>

        </div>

      </section>

      {/* MACHINE LEARNING SECTIE */}

      <section className="ml-section">

        <div className="ml-layout">

          <div className="ml-visual">
            VISUAL
          </div>

          <div className="ml-content">

            <h2>Wat is Machine learning?</h2>

            <p>
              Zoals net beschreven is AI een hele brede term die alle kunstmatige
              intelligentie overkoepelt. Machine Learning, vaak afgekort als ML,
              is een onderdeel van kunstmatige intelligentie (AI).
            </p>

            <p>
              Waar AI een brede term is voor systemen die 'slimme' dingen doen,
              is Machine Learning specifiek de techniek binnen AI waarbij een
              systeem zichzelf dingen “leert” op basis van data.
            </p>

            <p>
              In plaats van regels handmatig te programmeren
              (“als dit gebeurt, doe dan dat”), wordt het systeem zo ingesteld
              dat het op basis van voorbeelden rekenkundige modellen bouwt.
              Deze modellen worden vervolgens gebruikt om nieuwe data te
              verwerken en voorspellingen of beslissingssuggesties te doen.
            </p>

          </div>

        </div>

      </section>

            {/* ZORG SECTIE */}
      <section className="care-section">

        <div className="care-content">

          <h2>Waarom kan Machine Learning goed worden ingezet in de zorg?</h2>

          <div className="care-visual-card">
            AFBEELDING / VISUAL
          </div>

          <p>
            De hoeveelheid data in zorgorganisaties zijn nu al heel groot en blijven steeds groeien.
            Denk aan datasets uit patiëntregistraties, HR-systemen, roosterapplicaties, logistieke systemen
            en meer. Deze gegevens bevatten waardevolle inzichten, maar zijn voor mensen lastig volledig
            te overzien omdat er zo veel informatie in staat.
          </p>

          <p>
            Machine Learning biedt een manier om deze data efficiënt te analyseren en daaruit
            bruikbare patronen, trends en voorspellingen af te leiden. Het systeem begrijpt die
            gegevens niet zoals een mens dat zou doen, maar verwerkt ze op basis van statistiek
            en algoritmiek. Daardoor kunnen bijvoorbeeld zorgmedewerkers sneller signalen
            oppikken, knelpunten objectiveren en onderbouwde beslissingen nemen.
          </p>

        </div>

      </section>

      <div className="ai-scroll-top-button">↑</div>

    </div>
  );
}