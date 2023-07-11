import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AboutUs } from "./NavBar/AboutUs";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TalkToZeela } from "./NavBar/TalkToZeela";
import { Onboard } from "./NavBar/Onboard";
import { SourcingPlatForms } from "./NavBar/SourcingPlatforms";
import { CurrentOpenings } from "./NavBar/CurrentOpenings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/talkToZeela" element={<TalkToZeela />} />
        <Route path="/onBoard" element={<Onboard />} />
        <Route path="/sourcingPlatforms" element={<SourcingPlatForms />} />
        <Route path="/currentOpenings" element={<CurrentOpenings />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
