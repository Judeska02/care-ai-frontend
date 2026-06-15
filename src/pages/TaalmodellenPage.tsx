import "../App.css";
import "./TaalmodellenPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MenuOverlay from "../components/MenuOverlay";
import PageHeader from "../components/PageHeader";

import taalmodellenIconOranje from "../assets/taalmodellen/taalmodellen-icon-oranje.png";
import middel45 from "../assets/taalmodellen/middel-45.png";
import middel47 from "../assets/taalmodellen/middel-47.png";
import tekengebied17 from "../assets/taalmodellen/tekengebied-17.png";
import tekengebied20 from "../assets/taalmodellen/tekengebied-20.png";

import lagen2 from "../assets/taalmodellen/lagen-2.png";
import middel50 from "../assets/taalmodellen/middel-50.png";
import middel49 from "../assets/taalmodellen/middel-49.png";
import middel51 from "../assets/taalmodellen/middel-51.png";

import stappenLlm1 from "../assets/taalmodellen/stappen-llm-1.png";
import stappenLlm2 from "../assets/taalmodellen/stappen-llm-2.png";
import stappenLlm3 from "../assets/taalmodellen/stappen-llm-3.png";
import stappenLlm4 from "../assets/taalmodellen/stappen-llm-4.png";
import stappenLlm5 from "../assets/taalmodellen/stappen-llm-5.png";

import blackbox from "../assets/taalmodellen/blackbox.png";

export default function TaalmodellenPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [transformerOpen, setTransformerOpen] = useState(false);

  const [currentLlmStep, setCurrentLlmStep] = useState(0);

  const llmSteps = [
    stappenLlm1,
    stappenLlm2,
    stappenLlm3,
    stappenLlm4,
    stappenLlm5,
  ];

  useEffect(() => {
    const cycleImages = () => {
      setShowSecondImage(false);

      const switchToSecondImage = setTimeout(() => {
        setShowSecondImage(true);
      }, 1000);

      return switchToSecondImage;
    };

    const firstSwitchTimer = cycleImages();

    const intervalTimer = setInterval(() => {
      cycleImages();
    }, 11000);

    return () => {
      clearTimeout(firstSwitchTimer);
      clearInterval(intervalTimer);
    };
  }, []);


  return (
    <div className="taalmodellen-page">
      {menuOpen && (
        <MenuOverlay onClose={() => setMenuOpen(false)} />
      )}
      

      <PageHeader
        logo={taalmodellenIconOranje}
        logoAlt="Taalmodellen logo"
        activeDot={2}
        onMenuClick={() => setMenuOpen(true)}
        logoWidth={100}
      />


      {/* Pijlen links/rechts */}
      <button
        className="arrow left"
        onClick={() => navigate("/wat-is-ai")}
        aria-label="Ga naar de vorige pagina"
      >
        &#8249;
      </button>

      <button
        className="arrow right"
        onClick={() => navigate("/mogelijkheden")}
        aria-label="Ga naar de volgende pagina"
      >
        &#8250;
      </button>

      {/* Eerste scherm */}
      <div className="taalmodellen-hero-wrapper">
        <main className="taalmodellen-hero">
          <h1>
            Maar wat is een <span>taalmodel</span> eigenlijk?
            <br />
            En wat gebeurt er
            <br />
            wanneer je er een
            <br />
            vraag aan stelt?
          </h1>
        </main>

        <div className="taalmodellen-scroll-block">
          <p>
            <span>Scroll</span> door deze pagina en leer taalmodellen kennen.
          </p>

          <div className="taalmodellen-scroll-arrows">
            <span>⌄</span>
            <span>⌄</span>
            <span>⌄</span>
          </div>
        </div>
      </div>

      {/* Tweede sectie */}
      <section className="taalmodellen-intro-section">
        <div className="taalmodellen-intro-content">
          <h2>Wat zijn taalmodellen?</h2>

          <p>
            Door de komst van taalmodellen zoals ChatGPT en Copilot krijgt de
            automatisering in de zorg een nog grotere rol. Deze modellen kunnen
            slim ingezet worden bij administratieve en communicatieve taken.
            Denk bijvoorbeeld aan:
          </p>

          <div className="taalmodellen-examples">
            <div className="taalmodellen-example-card">
              <img src={middel45} alt="Automatisch genereren van gespreksverslagen" className="taalmodellen-example-image"/>
              <h3>
                Automatisch genereren
                <br />
                van gespreksverslagen
              </h3>
            </div>

            <div className="taalmodellen-example-card">
              <img src={middel47} alt="Samenvatten van documenten" className="taalmodellen-example-image"/>
              <h3>
                Samenvatten van
                <br />
                documenten
              </h3>
            </div>

            <div className="taalmodellen-example-card">
              <div className="taalmodellen-example-icon">ICOON</div>
              <h3>
                Hulp bij het
                <br />
                beantwoorden van
                <br />
                patiëntenvragen
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Derde sectie */}
      <section className="taalmodellen-chat-section">
        <div className="taalmodellen-chat-content">
          <h2>Maar wat is zo’n taalmodel nou eigenlijk?</h2>

          <p>
            Wanneer je het aan een taalmodel zelf vraagt krijg je het volgende
            antwoord:
          </p>

          <div className="taalmodellen-chat-image-wrapper">
            <img src={tekengebied17} alt="Voorbeeld van een vraag aan een taalmodel" className={`taalmodellen-chat-image ${
                showSecondImage ? "taalmodellen-chat-image-hidden" : ""
              }`}
            />

            <img src={tekengebied20} alt="Voorbeeld van een antwoord van een taalmodel" className={`taalmodellen-chat-image taalmodellen-chat-image-overlay ${
                showSecondImage ? "" : "taalmodellen-chat-image-hidden"
              }`}
            />
          </div>
        </div>
      </section>

      {/* Vierde sectie - Hoe werkt een taalmodel? */}
      <section className="taalmodellen-uitleg-section">
        <div className="taalmodellen-uitleg-layout">
          <div className="taalmodellen-uitleg-left"></div>

          <div className="taalmodellen-uitleg-content">
            <div className="taalmodellen-uitleg-title-row">
              <h2>Hoe werkt een taalmodel?</h2>
            </div>

            <p>
              Taalmodellen zoals Copilot zijn getraind op enorme hoeveelheden
              tekst, denk aan nieuwsartikelen, boeken, online forums, Wikipedia
              en zelfs medische papers. Op basis van al die tekst heeft het
              model patronen in taal geleerd: welke woorden vaak samen
              voorkomen, welke zinsstructuren logisch zijn, en hoe bijvoorbeeld
              een beleidsnotitie of e-mail er meestal uitziet.
            </p>

            <div className="taalmodellen-uitleg-note">
              <h3>Belangrijk om te weten</h3>
              <p>
                Een taalmodel begrijpt taal niet zoals mensen dat doen. Het
                heeft geen bewustzijn, geen intentie en ook geen kennis in de
                menselijke zin van het woord.
              </p>
            </div>
          </div>

          <div className="taalmodellen-uitleg-visual">
            <img src={lagen2} alt="Lagen van een taalmodel" className="taalmodellen-uitleg-image"/>

            <span className="taalmodellen-layer-label taalmodellen-layer-ai">AI</span>
            <span className="taalmodellen-layer-label taalmodellen-layer-ml">ML</span>
            <span className="taalmodellen-layer-label taalmodellen-layer-dl">DL</span>
            <span className="taalmodellen-layer-label taalmodellen-layer-taalmodel">
              Taalmodel
            </span>
          </div>
        </div>
      </section>

      {/* Vijfde sectie - Prompt voorbeeld */}
      <section className="taalmodellen-prompt-section">
        <div className="taalmodellen-prompt-layout">
          
          <div className="taalmodellen-prompt-left"></div>

          <div className="taalmodellen-prompt-center">
            <h2>Als jij het volgende aan een taalmodel vraagt:</h2>

            <div className="taalmodellen-prompt-box">
              <p>Kun je een kort verslag maken van dit overleg?</p>
            </div>
          </div>

          <div className="taalmodellen-prompt-right"></div>

        </div>
      </section>

      {/* Zesde sectie - Wat gebeurt er bij het taalmodel? */}
      <section className="taalmodellen-proces-section">
        <div className="taalmodellen-proces-layout">
         <div className="taalmodellen-proces-left">
          <img src={middel50} alt="Illustratie van zorgprofessional" className="taalmodellen-proces-image"/>
        </div>

          <div className="taalmodellen-proces-center">
            <h2>Gebeurt er bij het taalmodel het volgende:</h2>

            <div className="taalmodellen-proces-card">
              <p className="taalmodellen-proces-intro">
                Het taalmodel kijkt naar voorgaande voorbeelden die het heeft
                gezien en ziet dat verslagen meestal als volgt zijn opgebouwd:
              </p>

              <div className="taalmodellen-proces-list">
                <div className="taalmodellen-proces-item">Inleiding</div>
                <div className="taalmodellen-proces-item">Actiepunten</div>
                <div className="taalmodellen-proces-item">Besluiten</div>
                <div className="taalmodellen-proces-item">Samenvatting</div>
                <div className="taalmodellen-proces-item">Opmerkingen</div>
                <div className="taalmodellen-proces-item">Bijlagen</div>
              </div>

              <p className="taalmodellen-proces-uitleg">
                Ook als je vraagt om een “formele toon” of een “korte,
                zakelijke stijl”, weet het model welke woorden en toon daar
                doorgaans bij passen. Het resultaat is vaak indrukwekkend
                menselijk klinkende tekst, terwijl het in de kern dus gaat om
                kansberekening: welke woorden passen het best bij elkaar?
              </p>
            </div>
          </div>

          <div className="taalmodellen-proces-right">
            <img src={middel49} alt="Illustratie van AI-robot" className="taalmodellen-proces-right-image"/>
          </div>
        </div>
      </section>

      {/* Zevende sectie - Door naar mogelijkheden */}
      <section className="taalmodellen-verwijzing-section">
        <div className="taalmodellen-verwijzing-layout">

          <div className="taalmodellen-verwijzing-left"></div>

          <div className="taalmodellen-verwijzing-center">
            <div className="taalmodellen-verwijzing-card">

              <p>
                Benieuwd naar de specifiekere toepassingen en verschillende
                mogelijkheden van AI?
              </p>

              <button
                className="taalmodellen-verwijzing-button"
                onClick={() => navigate("/mogelijkheden")}
                aria-label="Ga naar de mogelijkheden pagina"
              >
                <span> &#8250; </span>
              </button>

            </div>
          </div>

          <div className="taalmodellen-verwijzing-right"></div>

        </div>
      </section>

      {/* Achtste sectie - Wat zit er onder de motorkap? */}
      <section className="taalmodellen-motorkap-section">
        <div className="taalmodellen-motorkap-layout">
          <div className="taalmodellen-motorkap-left">
            <div className="taalmodellen-motorkap-image-wrapper">
              <img src={middel51} alt="Visualisatie van een neuraal netwerk" className="taalmodellen-motorkap-image"/>

              <span className="taalmodellen-motorkap-label taalmodellen-motorkap-label-hidden">
                Verborgen lagen
              </span>
              <span className="taalmodellen-motorkap-label taalmodellen-motorkap-label-input">
                Input
              </span>
              <span className="taalmodellen-motorkap-label taalmodellen-motorkap-label-output">
                Output
              </span>

            </div>
          </div>

          <div className="taalmodellen-motorkap-center">
            <h2>Wat zit er onder de motorkap?</h2>

            <p>
              Een taalmodel zoals Copilot is een vorm van kunstmatige
              intelligentie die gebruikmaakt van een techniek genaamd{" "}
              <span
                className="taalmodellen-inline-link"
                onClick={() => {
                  navigate("/wat-is-ai");

                  setTimeout(() => {
                    document
                      .getElementById("deep-learning")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
              >
                Deep Learning
              </span> {" "}
              Hierbij wordt informatie verwerkt
              in kunstmatige neurale netwerken: wiskundige modellen die zijn
              opgebouwd uit lagen, een beetje zoals een fabriek waar informatie
              stap voor stap wordt verwerkt.
            </p>

            <p>
              Grote taalmodellen (LLM’s) bestaan uit tientallen tot honderden
              lagen, waardoor ze complexe verbanden in taal kunnen herkennen.
              Ze maken gebruik van een specifieke aanpak, namelijk het{" "}
              <button
                className="taalmodellen-transformer-link"
                onClick={() => setTransformerOpen(true)}
              >
                transformermodel
              </button>
              {" "} dat in staat is om niet alleen
              woorden los te bekijken, maar hele zinnen of alinea’s tegelijk –
              inclusief de onderlinge verbanden.
            </p>

            <p>
              Dankzij dit model kan het systeem de context van een zin beter
              begrijpen, zoals waarom een bepaald woord wordt gebruikt op een
              specifieke plek, of wat een logische volgende stap in een tekst
              is.
            </p>
          </div>

          <div className="taalmodellen-motorkap-right"></div>
        </div>

          {transformerOpen && (
            <div className="taalmodellen-transformer-modal">

              <button
                className="taalmodellen-transformer-close"
                onClick={() => setTransformerOpen(false)}
                aria-label="Sluit uitleg"
              >
                ×
              </button>

              <h2>Transformermodel</h2>

              <p>
                De Transformer is een soort AI-model die heel goed is in het leren van
                sequenties, zoals een sequentie van woorden. Hierdoor leert het model welk
                woord het meest waarschijnlijk is op basis van een sequentie van woorden.
                Ze doen dit door woord voor woord te bekijken wat belangrijk is in een zin,
                en welke woorden met elkaar te maken hebben.
              </p>

              <p>
                In plaats van tekst gewoon van links naar rechts te lezen, kijken transformers
                steeds naar alle woorden tegelijk en letten ze extra goed op welke woorden
                belangrijk zijn voor elkaar. Dat heet “attention”, een soort focusmechanisme.
                Zo kunnen ze bijvoorbeeld begrijpen dat “dokter” en “patiënt” in een zin iets
                met elkaar te maken hebben, ook als er andere woorden tussen staan.
              </p>

              <p>
                Je kunt het een beetje vergelijken met hoe jij een tekst scant: je kijkt snel
                naar de belangrijke woorden en let op wat met wat te maken heeft, transformers
                doen dat ook, maar dan heel snel en met grote hoeveelheden tekst tegelijk.
              </p>

            </div>
          )}
      </section>

      {/* Negende sectie - Wat gebeurt er binnen een model */}
      <section className="taalmodellen-procesflow-section">
        <div className="taalmodellen-procesflow-layout">

          <div className="taalmodellen-procesflow-left"></div>

          <div className="taalmodellen-procesflow-center">
            <h2>
              Wat gebeurt er binnen zo’n model wanneer je een vraag stelt?
            </h2>

            <div className="taalmodellen-procesflow-slider">
              {currentLlmStep > 0 && (
                <button
                  className="taalmodellen-procesflow-prev"
                  onClick={() => setCurrentLlmStep(currentLlmStep - 1)}
                  aria-label="Vorige stap"
                >
                  &#8249;
                </button>
              )}

              <img
                src={llmSteps[currentLlmStep]}
                alt={`Stap ${currentLlmStep + 1}`}
                className="taalmodellen-procesflow-image"
              />

              <button
                className="taalmodellen-procesflow-next"
                onClick={() =>
                  setCurrentLlmStep((currentLlmStep + 1) % llmSteps.length)
                }
                aria-label="Volgende stap"
              >
                &#8250;
              </button>
            </div>

            <p>
              Stel, je krijgt een beleidsdocument van 8 pagina’s over de invoering
              van een nieuw digitaal registratiesysteem. Jij wilt snel weten wat
              de belangrijkste veranderingen zijn en wat dit betekent voor de
              administratieve afdelingen. Je vraagt het aan een taalmodel.
            </p>
          </div>

          <div className="taalmodellen-procesflow-right"></div>

        </div>
      </section>

      {/* Tiende sectie - Blackbox */}
      <section className="taalmodellen-blackbox-section">
        <div className="taalmodellen-blackbox-layout">
          <div className="taalmodellen-blackbox-left"></div>

          <div className="taalmodellen-blackbox-center">
            <h2>Blackbox</h2>

            <p>
              Stel je voor dat je een vraag typt in een taalmodel zoals
              ChatGPT. Binnen een seconde krijg je een vloeiend en logisch
              antwoord terug. Best indrukwekkend. Maar als je je afvraagt hoe
              het model precies tot dat antwoord kwam, is dat moeilijk te
              interpreteren. Het voelt een beetje alsof je iets in een zwarte
              doos stopt, er komt iets bruikbaars uit, maar wat er daartussen
              gebeurt? Geen idee. Dat noemen we het black-box probleem.
            </p>

            <div className="taalmodellen-blackbox-placeholder">
              <img src={blackbox}alt="Visualisatie van het black-box probleem" className="taalmodellen-blackbox-image"/>
            </div>

            <p className="taalmodellen-blackbox-uitleg">
              Bij deze ‘black-box-modellen weten we wél wat erin gaat {" "} 
              <span className="highlight-orange">(jouw input)</span>, 
              en wat eruit komt {" "}
              <span className="highlight-orange">(de gegenereerde tekst)</span>, 
              maar de precieze route daartussen is voor mensen moeilijk te volgen. 
              Zeker bij taalmodellen zoals ChatGPT, die zijn gebouwd met deep learning 
              en bestaan uit tientallen of zelfs honderden lagen van rekencapaciteit. 
              Die lagen maken allerlei berekeningen op basis van patronen in 
              gigantische hoeveelheden tekst, maar ze doen dat op zo’n complexe 
              manier dat het voor mensen niet goed na te trekken is.
            </p>
          </div>

          <div className="taalmodellen-blackbox-right"></div>
        </div>
      </section>

      {/* Elfde sectie - Waarom is het zo lastig te begrijpen? */}
      <section className="taalmodellen-begrijpen-section">
        <div className="taalmodellen-begrijpen-layout">
          <div className="taalmodellen-begrijpen-left"></div>

          <div className="taalmodellen-begrijpen-center">
            <h2>Waarom is het zo lastig te begrijpen?</h2>

            <p>
              Je kunt het vergelijken met hoe een ervaren kok op gevoel een
              gerecht maakt: hij heeft duizenden maaltijden gekookt, weet
              intuïtief wat werkt, maar kan niet precies uitleggen waarom hij op
              dit moment voor nét die hoeveelheid kruiden kiest. Zo werkt een
              taalmodel ook. Het baseert zich op wat het geleerd heeft uit
              miljoenen teksten, maar kan meestal niet zelf uitleggen waarom het
              precies dat ene antwoord gaf.
            </p>

            <p>
              Dat gebrek aan inzicht kan het voor sommigen moeilijk maken om een
              model volledig te kunnen vertrouwen. Want in sommige situaties,
              zoals in de zorg of bij juridische beslissingen, moet je kunnen
              begrijpen waarom een systeem iets zegt. Wat als het model iets
              verzint? Of onbedoeld bevooroordeeld is?
            </p>

            <p>
              Daarom is het belangrijk om je bewust te zijn van wat AI kan, maar
              óók waar de grenzen liggen. Niet alles wat uit de zwarte doos
              komt, is automatisch waar of betrouwbaar. Juist daarom blijft de{" "}
              <span className="taalmodellen-highlight-orange">
                rol van de mens cruciaal.
              </span>
            </p>
          </div>

          <div className="taalmodellen-begrijpen-right"></div>
        </div>
      </section>

      {/* Twaalfde sectie - Human in the loop */}
      <section className="taalmodellen-human-section">
        <div className="taalmodellen-human-layout">
          <div className="taalmodellen-human-left"></div>

          <div className="taalmodellen-human-center">
            <button
              className="taalmodellen-human-label"
              onClick={() => {
                navigate("/mogelijkheden");

                setTimeout(() => {
                  document
                    .getElementById("human-in-the-loop")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 100);
              }}
            >
              <span>Human in the loop</span>
            </button>

            <h2>Risico’s en valkuilen van taalmodellen</h2>

            <h3>Privacy</h3>

            <p>
              Zoals we ondertussen weten, verwerken taalmodellen tekst. Dit kan
              heel handig zijn maar je moet dus wel oppassen wanneer er
              gevoelige informatie in tekst staat die niet zomaar overal mag
              belanden. Omdat je in de zorg dagelijks werkt met gevoelige
              informatie zoals: patiëntendossiers, namen, klachten, medische
              beelden moet je voorzichtig zijn wanneer je gebruikmaakt van een
              extern taalmodel, (een taalmodel dat met een openbare server werkt die dus niet
              binnen de eigen zorginstelling beveiligd is).
            </p>

          </div>

          <div className="taalmodellen-human-right"></div>
        </div>
      </section>

      {/* Dertiende sectie - Hallucinaties en Bias */}
      <section className="taalmodellen-risicos-section">
        <div className="taalmodellen-risicos-layout">
          <div className="taalmodellen-risicos-left"></div>

          <div className="taalmodellen-risicos-center">
            <h2>Hallucinaties</h2>

            <p>
              Een vreemde eigenschap van taalmodellen is dat ze niet altijd
              zeggen wanneer ze iets niet weten. In plaats daarvan geven ze soms
              toch een antwoord – ook als dat verzonnen is. Dat noemen we een
              "hallucinatie". Bijvoorbeeld: als je vraagt naar een historisch
              feit dat niet in de trainingsdata zat, kan het model een antwoord
              verzinnen dat heel geloofwaardig klinkt… maar niet klopt. Dit kan
              leiden tot onjuiste informatie, verkeerde interpretaties. Lees
              daarom altijd toch goed na of er dingen instaan die feitelijk niet
              kloppen en check de tekst altijd.
            </p>

            <h2>Bias</h2>

            <p>
              Taalmodellen leren dus van teksten die wij mensen hebben
              geschreven, maar we weten ook dat wij als mensen vaak fouten
              kunnen maken. En daarom kunnen er dus ook fouten belanden in de
              data die wordt gebruikt om een taalmodel te trainen. Fouten
              kunnen verschillende dingen zijn; denk aan stereotypen en
              onevenwichtigheden.
            </p>

            <p>
              Wanneer een taalmodel bijvoorbeeld wordt getraind op veel data
              waarin staat dat alle verpleegkundigen vrouwen zijn, neemt het
              model aan dat daadwerkelijk alle verpleegkundigen alleen vrouwen
              zijn.
            </p>
          </div>

          <div className="taalmodellen-risicos-right"></div>
        </div>
      </section>

      {/* Door naar Mogelijkheden */}
      <section className="taalmodellen-next-theme-section">
        <div className="taalmodellen-next-theme-layout">

          <div className="taalmodellen-next-theme-left"></div>

          <div className="taalmodellen-next-theme-center">

            <div className="taalmodellen-next-theme-button">

              <span>
                Door naar het volgende thema over de mogelijkheden?
              </span>

              <button
                className="taalmodellen-next-theme-arrow"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/mogelijkheden");
                }}
                aria-label="Ga naar de mogelijkheden pagina"
              >
                &#8250;
              </button>

            </div>

          </div>

          <div className="taalmodellen-next-theme-right"></div>

        </div>
      </section>

      {/* Scroll naar boven knop */}
      <button
        className="ai-scroll-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll naar boven"
      >
        ↑
      </button>
    </div>
  );
}