import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Totop from "./atoms/Totop";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { CharacterContextProvider } from "./context/CharacterContext";
import { DeathContextProvider } from "./context/DeathContext";
import { EpisodeContextProvider } from "./context/EpisodeContext";
import { QuoteContextProvider } from "./context/QuoteContext";
import CharacterPage from "./pages/Characters";
import RandomCharacter from "./pages/Characters/RandomCharacter";
import Character from "./pages/Characters/[id]";
import DeathPage from "./pages/Deathes";
import RandomDeath from "./pages/Deathes/RandomDeath";
import EpizodePage from "./pages/Epizodes";
import QuotePage from "./pages/Quotes";
function App() {
  return (
    <BrowserRouter>
      <CharacterContextProvider>
        <DeathContextProvider>
          <QuoteContextProvider>
            <EpisodeContextProvider>
              <Navbar />
              <Header />
              <Routes>
                <Route exact path="/" element={<CharacterPage />} />
                <Route exact path="/:id" element={<Character />} />
                <Route exact path="/deaths" element={<DeathPage />} />
                <Route exact path="/quotes" element={<QuotePage />} />
                <Route exact path="/epizodes" element={<EpizodePage />} />
                <Route exact path="/randomcharacter" element={<RandomCharacter />} />
                <Route exact path="/randomdeath" element={<RandomDeath />} />
              </Routes>
              <Totop />
            </EpisodeContextProvider>
          </QuoteContextProvider>
        </DeathContextProvider>
      </CharacterContextProvider>
    </BrowserRouter>
  );
};
export default App;