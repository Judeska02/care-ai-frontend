import { useState } from "react";

export default function WatIsAIPage() {
  const [openMethod1, setOpenMethod1] = useState(false);
  const [openMethod2, setOpenMethod2] = useState(false);
  const [openMethod3, setOpenMethod3] = useState(false);

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


      {/* HOE WERKT DAT DAN PRECIES SECTIE */}

      <section className="process-section">

        <div className="process-header">
          <h2>Hoe werkt dat dan precies?</h2>
          <p>
            Dit hele proces gebeurt in eerste instantie in een proefsetting,
            om te testen en te verbeteren voordat het in de praktijk wordt ingezet.
          </p>
        </div>

        {/* STAP 1 */}
        <div className="process-layout">
          <div className="process-middle">
            <div className="process-timeline">
              <div className="process-number">1</div>
              <div className="process-line"></div>
            </div>

            <div className="process-content">
              <h3>Data verzamelen en voorbereiden</h3>
              <p>
                Je begint met een grote hoeveelheid gegevens, bijvoorbeeld uit EPD’s,
                planningssystemen of HR-rapportages. Deze data moeten opgeschoond worden:
                geen dubbele informatie, geen fouten, geen gaten. Dit is vaak ook het
                meest tijdrovende proces.
              </p>
            </div>
          </div>

          <div className="process-visual">
            AFBEELDING
          </div>
        </div>

        {/* STAP 2 */}
        <div className="process-layout">
          <div className="process-middle">
            <div className="process-timeline">
              <div className="process-number">2</div>
              <div className="process-line"></div>
            </div>

            <div className="process-content">
              <h3>Een model trainen</h3>
              <p>
                De opgeschoonde data worden gebruikt om het systeem te trainen.
                Het model zoekt naar patronen en relaties. Denk aan:
                “Als er bij een bepaalde afdelingsbezetting vaker uitloop ontstaat,
                dan herkent het model dat een hogere bezetting samenhangt met
                een grotere kans op uitloop.”
              </p>
            </div>
          </div>

          <div className="process-visual">
            AFBEELDING
          </div>
        </div>

        {/* STAP 3 */}
        <div className="process-layout">
          <div className="process-middle">
            <div className="process-timeline">
              <div className="process-number">3</div>
              <div className="process-line"></div>
            </div>

            <div className="process-content">
              <h3>Testen en controleren</h3>
              <p>
                Na het trainen wordt het model getest met nieuwe gegevens die het nog
                niet eerder heeft gezien. Dit is om te testen of het systeem echt
                algemene patronen heeft herkend in de data, in plaats van alleen de
                trainingsvoorbeelden letterlijk te reproduceren.
              </p>
            </div>
          </div>

          <div className="process-visual">
            AFBEELDING
          </div>
        </div>

        {/* STAP 4 */}
        <div className="process-layout">
          <div className="process-middle">
            <div className="process-timeline">
              <div className="process-number">4</div>
              <div className="process-line"></div>
            </div>

            <div className="process-content">
              <h3>Bijsturen</h3>
              <p>
                Werkt het nog niet goed? Dan worden er dingen aangepast: misschien moet
                het model anders ingesteld worden, of is er betere data nodig. Dit
                gebeurt vaak meerdere keren.
              </p>
            </div>
          </div>

          <div className="process-visual">
            AFBEELDING
          </div>
        </div>

        {/* STAP 5 */}
        <div className="process-layout">
          <div className="process-middle">
            <div className="process-timeline">
              <div className="process-number">5</div>
              <div className="process-line"></div>
            </div>

            <div className="process-content">
              <h3>Toepassen in de praktijk</h3>
              <p>
                Pas als het model goed presteert, kan het worden ingezet in de praktijk
                om bijvoorbeeld voorspellingen te doen, signalen te genereren of
                beleidskeuzes te ondersteunen.
              </p>
            </div>
          </div>

          <div className="process-visual">
            AFBEELDING
          </div>
        </div>

      </section>


      {/* METHODEN VAN MACHINE LEARNING SECTIE */}
      <section className="ml-methods-section">

        <div className="ml-methods-container">
          <h2>Verschillende methoden van Machine Learning</h2>

          <p>
            Machine Learning kan op meerdere manieren worden toegepast,
            afhankelijk van het doel en de aard van de data. De drie
            hoofdmethoden zijn:
          </p>

          <div className="ml-methods-list">

            {/* BLOK 1 */}
            <div className={`ml-method-card ${openMethod1 ? "open" : ""}`}>
              <button
                className="ml-method-header"
                onClick={() => setOpenMethod1(!openMethod1)}
              >
                <span>Supervised learning (geleide analyse)</span>
                <div className="ml-method-icon">
                  {openMethod1 ? "⌃" : "⌄"}
                </div>
              </button>

              {openMethod1 && (
                <div className="ml-method-body">
                  <p>
                    Hierbij krijgt het systeem voorbeelden van input met
                    bijbehorende gewenste uitkomsten. Op basis daarvan wordt het
                    model geoptimaliseerd om vergelijkbare verbanden te
                    herkennen in nieuwe data. Denk bijvoorbeeld aan foto’s van
                    honden en katten, waarbij telkens is aangegeven of het om
                    een hond of een kat gaat. Zo leert het model patronen te
                    herkennen die kenmerkend zijn voor honden en voor katten,
                    waardoor het bij nieuwe foto’s zelfstandig kan bepalen of
                    het om een hond of een kat gaat.
                  </p>

                  <button className="ml-method-image-button">
                    Bekijk afbeelding
                  </button>
                </div>
              )}
            </div>

            {/* BLOK 2 */}
            <div className={`ml-method-card ${openMethod2 ? "open" : ""}`}>
              <button
                className="ml-method-header"
                onClick={() => setOpenMethod2(!openMethod2)}
              >
                <span>Unsupervised learning on (geleide analyse)</span>
                <div className="ml-method-icon">
                  {openMethod2 ? "⌃" : "⌄"}
                </div>
              </button>

              {openMethod2 && (
                <div className="ml-method-body">
                  <p>
                    Hierbij worden geen uitkomsten meegegeven. Het model analyseert de
                    data en groepeert elementen die wiskundig gezien op elkaar lijken.
                    Denk bijvoorbeeld aan een verzameling foto’s van honden en katten,
                    zónder dat erbij staat welk dier het is. Het model zoekt dan zelf
                    naar overeenkomsten in de beelden, zoals vacht, oorvorm of
                    lichaamsbouw, en groepeert de dieren die op elkaar lijken. Zo kunnen
                    bijvoorbeeld alle katten in één groep terechtkomen en de honden in
                    een andere, zonder dat het model expliciet heeft geleerd wat een hond
                    of kat is.
                  </p>

                  <button className="ml-method-image-button">
                    Bekijk afbeelding
                  </button>
                </div>
              )}
            </div>

            {/* BLOK 3 */}
            <div className={`ml-method-card ${openMethod3 ? "open" : ""}`}>
              <button
                className="ml-method-header"
                onClick={() => setOpenMethod3(!openMethod3)}
              >
                <span>Reinforcement learning (optimalisatie)</span>
                <div className="ml-method-icon">
                  {openMethod3 ? "⌃" : "⌄"}
                </div>
              </button>

              {openMethod3 && (
                <div className="ml-method-body">
                  <p>
                    Dit is een manier van leren waarbij een systeem feedback krijgt op zijn
                    acties in de vorm van beloningen of straffen. Het probeert iets uit,
                    leert van de uitkomst en past zijn gedrag aan om het de volgende keer
                    beter te doen. Je kunt het vergelijken met het trainen van een hond:
                    als de hond netjes gaat zitten, krijgt hij een snoepje; doet hij iets
                    fout, dan blijft de beloning uit. Zo leert hij welk gedrag wenselijk
                    is. Een AI-systeem leert op dezelfde manier, maar krijgt i.p.v. een
                    snoepje bijvoorbeeld punten voor goed gedrag en puntenaftrek voor
                    fouten.
                  </p>

                  <button className="ml-method-image-button">
                    Bekijk afbeelding
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </section>

      <div className="ai-scroll-top-button">↑</div>

    </div>
  );
}