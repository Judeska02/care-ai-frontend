import "../App.css";
import "./MogelijkhedenPage.css";
import { useNavigate } from "react-router-dom";

export default function MogelijkhedenPage() {
  const navigate = useNavigate();

  return (
    <div className="mogelijkheden-page">
      {/* Header */}
      <header className="mogelijkheden-header">
        <div className="mogelijkheden-logo">LOGO</div>

        <div className="progress-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot active"></div>
        </div>

        <div className="mogelijkheden-menu">MENU</div>
      </header>

      {/* Pijlen links/rechts */}
      <button
        className="arrow left"
        onClick={() => navigate("/taalmodellen")}
        aria-label="Ga naar de vorige pagina"
      >
        &#8249;
      </button>

      <button
        className="arrow right"
        onClick={() => navigate("/extra")}
        aria-label="Ga naar de volgende pagina"
      >
        &#8250;
      </button>

      {/* Eerste scherm */}
      <div className="mogelijkheden-hero-wrapper">
        <main className="mogelijkheden-hero">
          <div className="mogelijkheden-hero-text">
            <h1>
              Maar wat kan het
              <br />
              eigenlijk voor jou
              <br />
              betekenen?
            </h1>
          </div>

          <div className="mogelijkheden-hero-image">
            AFBEELDING / ILLUSTRATIE
          </div>
        </main>

        <div className="scroll-indicator"></div>
      </div>

            {/* Intro sectie */}
      <section className="mogelijkheden-intro-section">
        <div className="mogelijkheden-intro-layout">
          <div></div>

          <div className="mogelijkheden-intro-content">
            <h2>Waar kan AI jou bij helpen?</h2>

            <p>
              Als het goed is, heb je nu een beter beeld van wat AI en
              taalmodellen zijn. Nog niet helemaal zeker? Dan kun je altijd nog
              even terug naar de thema’s <span>Wat is AI?</span> of{" "}
              <span className="orange-text">Taalmodellen</span> om je verder in
              te lezen.
            </p>

            <p>
              Heb je daar geen interesse in en wil je vooral weten wat AI voor
              jou kan betekenen? Ook helemaal goed, laten we dan direct naar de
              mogelijkheden kijken.
            </p>

            <div className="ondersteuning-block">
              <h3>Ondersteuning</h3>

              <p>
                De druk op de zorg neemt steeds verder toe: er is een tekort aan
                personeel en de werkdruk blijft stijgen. AI kan hierbij een
                waardevolle ondersteuning zijn, door bepaalde taken uit handen
                te nemen en zo de werkdruk te verlichten.
              </p>

              <p>
                Laten we samen kijken waar AI, en dan met name taalmodellen,
                jou in jouw werk zouden kunnen ondersteunen.
              </p>

              <div className="ondersteuning-image">
                AFBEELDING / ILLUSTRATIE
              </div>

              <div className="mogelijkheden-question-card">
                <h3>Wat is mogelijk?</h3>
              </div>

              <div className="mogelijkheden-examples">
                <div className="example-block verslaglegging">
                  <div className="example-empty-left"></div>

                  <div className="example-text">
                    <h3>Verslaglegging &amp; rapportages</h3>

                    <p>
                      Een groot deel van het werk in de zorg draait om documentatie: van
                      consultverslagen en overdrachtsrapporten tot ontslagbrieven. Dat kost
                      vaak veel tijd, zeker als je alles zelf moet uitschrijven. AI kan hier
                      enorm in ondersteunen. Je hoeft alleen de belangrijkste punten van een
                      gesprek of behandeling in te voeren, denk aan symptomen, diagnose,
                      voorgeschreven behandeling, en de AI zet dit om in een nette, goed
                      geformuleerde tekst. Zo blijft de inhoud kloppend en professioneel,
                      terwijl jij tijd bespaart en je kunt richten op de patiëntenzorg.
                    </p>
                  </div>

                  <div className="example-image right">
                    AFBEELDING
                  </div>
                </div>

                <div className="example-block speech-to-text">
                  <div className="example-image left">
                    AFBEELDING
                  </div>

                  <div className="example-text">
                    <h3>Speech to text</h3>

                    <p>
                      Een belangrijke toepassing is het automatisch transcriberen van
                      gesprekken tussen zorgverleners en patiënten. Denk aan een consult
                      waarbij de AI op de achtergrond meeluistert en een nauwkeurige
                      samenvatting in tekst genereert. Dit helpt bij het vastleggen van
                      belangrijke informatie, voorkomt dat details verloren gaan, en kan de
                      overdracht tussen collega’s verbeteren. Het resultaat: efficiëntere
                      communicatie en hogere kwaliteit van zorg.
                    </p>
                  </div>

                  <div className="example-empty-right"></div>
                </div>

                <div className="example-block samenvattingen">
                  <div className="example-empty-left"></div>

                  <div className="example-text">
                    <h3>Samenvattingen van lange teksten</h3>

                    <p>
                      Heb je een beleidsdocument van 30 pagina’s op je bureau liggen of een
                      onderzoeksrapport dat je eigenlijk moet lezen, maar waar je geen tijd voor
                      hebt? Een taalmodel kan helpen door automatisch een beknopte samenvatting
                      te maken van de belangrijkste punten. Zo krijg je snel inzicht in de kern
                      van de tekst, zonder alles tot in detail te hoeven lezen. Dit is vooral
                      handig als je snel besluiten moet nemen of informatie wilt delen met
                      collega’s.
                    </p>
                  </div>

                  <div className="example-image right">
                    AFBEELDING
                  </div>
                </div>

                <div className="example-block taalniveau">
                  <div className="example-image left">
                    AFBEELDING
                  </div>

                  <div className="example-text">
                    <h3>Omzetten van taalniveau</h3>

                    <p>
                      Sommige informatie is geschreven op een hoog, technisch niveau
                      bijvoorbeeld bij medische richtlijnen of onderzoeksresultaten. Maar niet
                      elke patiënt kan die taal begrijpen. Met AI kun je zulke teksten
                      herschrijven naar begrijpelijke taal, zonder dat de essentie verloren
                      gaat. Dit helpt om zorg communicatiever en inclusiever te maken. Ook voor
                      collega’s uit andere vakgebieden kan het handig zijn om complexe teksten in
                      eenvoudiger taal te kunnen lezen.
                    </p>
                  </div>

                  <div className="example-empty-right"></div>
                </div>

                <div className="example-block emails">
                  <div className="example-empty-left"></div>

                  <div className="example-text">
                    <h3>Genereren van e-mails of herinneringen</h3>

                    <p>
                      Of het nu gaat om een korte herinneringsmail voor een afspraak, een
                      intern bericht aan collega’s, of een standaardmail over een uitslag: AI
                      kan snel een passende tekst opstellen. Je voert de inhoudelijke punten in
                      (bijvoorbeeld: datum, tijd, onderwerp), en de AI genereert een
                      duidelijke, nette mail of melding. Dit scheelt niet alleen tijd, maar
                      zorgt ook voor consistentie in je communicatie.
                    </p>
                  </div>

                  <div className="example-image right">
                    AFBEELDING
                  </div>
                </div>

                <div className="example-block vertaaltaken">
                  <div className="example-image left">
                    AFBEELDING
                  </div>

                  <div className="example-text">
                    <h3>Vertaaltaken</h3>

                    <p>
                      Het kan zijn dat je te maken krijgt met patiënten die de Nederlandse taal
                      niet of beperkt spreken. AI-gestuurde vertaalsystemen kunnen dan uitkomst
                      bieden, bijvoorbeeld bij het vertalen van instructies,
                      informatiefolders of gesprekken. Let wel: vertalingen van AI zijn handig
                      als ondersteuning, maar ze zijn niet altijd 100% accuraat. Zeker bij
                      medische informatie is het belangrijk dat een menselijke controle volgt,
                      om misverstanden te voorkomen.
                    </p>
                  </div>

                  <div className="example-empty-right"></div>
                </div>

                <div className="mogelijkheden-video-block">
                  <div></div>

                  <div className="mogelijkheden-video-placeholder">
                    VIDEO PLACEHOLDER
                  </div>

                  <div></div>
                </div>

                <section className="mogelijkheden-warning-section">
                  <div className="mogelijkheden-warning-layout">
                    <div className="mogelijkheden-warning-content">
                      <div className="warning-heading">
                        <div className="warning-icon">
                          <div className="warning-icon-inner"></div>
                        </div>
                        <h2>Let wel op!</h2>
                      </div>

                      <p>
                        Hoewel AI je dus op allerlei manieren ondersteuning kunnen bieden is het
                        belangrijk om bij al deze toepassingen goed op te letten welke gegevens
                        je invoert. Denk bijvoorbeeld aan patiëntinformatie die je invoert bij
                        het laten opstellen van een verslag of samenvatting. Op dit moment maken
                        veel zorgprofessionals gebruik van openbare AI-tools, zoals ChatGPT en
                        CoPilot. Die werken via het internet en verwerken gegevens buiten de
                        beveiligde systemen van het ziekenhuis. Dat betekent dat je dus goed moet
                        opletten dat je geen vertrouwelijke of herleidbare informatie over
                        patiënten invoert.
                      </p>

                      <p>
                        In de toekomst kunnen ziekenhuizen er eventueel voor kiezen om een eigen
                        AI-model te ontwikkelen of aan te schaffen dat binnen een afgeschermde en
                        beveiligde omgeving draait. In zo’n geval blijven de gegevens binnen de
                        muren van de organisatie, en is het risico op datalekken veel kleiner.
                        Maar zolang je werkt met open tools zoals ChatGPT en CoPilot, geldt:
                      </p>

                      <p className="warning-highlight">
                        denk goed na over wat je deelt, en verwerk geen persoonsgegevens of
                        medische inhoud zonder duidelijke afspraken en goedkeuring.
                      </p>
                    </div>
                  </div>
                </section>                

                <section className="human-loop-section">
                  <div className="human-loop-layout">
                    <div className="human-loop-content">
                      <h2>Human in the loop</h2>

                      <p>
                        Je hebt nu een breed beeld gekregen van wat AI en taalmodellen kunnen
                        betekenen binnen de zorg. Misschien heb je al ideeën opgedaan over hoe
                        dit in jouw werk zou kunnen passen.
                      </p>

                      <p>
                        AI is er om jou te ondersteunen, niet om je te vervangen.
                      </p>

                      <div className="human-loop-card">
                        <p>
                          Jij bent en blijft degene die beslist of je gebruik wilt maken van
                          deze technologie. De mens is altijd betrokken bij de keuzes die
                          gemaakt worden. AI is een hulpmiddel, geen vervanging van jouw
                          expertise, ervaring of professionele oordeel. Dit noemen we ook wel
                          human in the loop.
                        </p>
                      </div>

                      <p>
                        Voel je dus nooit verplicht om “mee te moeten” met AI omdat het nu
                        eenmaal beschikbaar is. Kijk kritisch: helpt dit mij? Is het betrouwbaar
                        genoeg? Bespreek dit samen met je collega’s. Hoe gebruiken zij AI? Wat
                        werkt voor hen wel, en wat niet? Door ervaringen te delen en samen te
                        leren, kun je beter inschatten wat voor jou zinvol is.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mogelijkheden-outro-section">
                  <div className="mogelijkheden-outro-layout">
                    <div className="mogelijkheden-outro-content">
                      <div className="mogelijkheden-outro-image">
                        AFBEELDING / ILLUSTRATIE
                      </div>

                      <p>
                        AI opent nieuwe mogelijkheden, maar jij bepaalt welke daarvan
                        waardevol zijn in jouw dagelijkse praktijk.
                      </p>

                      <div className="prompt-cta-block">
                      <p>
                        Heb je alle informatie doorgelopen en ben je geïnteresseerd in iets extra’s?
                      </p>

                      <div className="prompt-cta-bar">
                        <span>Vraag het ‘How To Prompt’ boekje aan!</span>

                        <button
                          className="prompt-cta-button"
                          onClick={() => console.log("How To Prompt boekje aanvragen")}
                          aria-label="Vraag het How To Prompt boekje aan"
                        >
                          <span>&#8250;</span>
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </section>

              </div>

            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
}