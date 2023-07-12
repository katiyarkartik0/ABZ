import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TalkToZeela } from "./NavBar/TalkToZeela";
import { Onboard } from "./NavBar/Onboard";
import { SourcingPlatForms } from "./NavBar/SourcingPlatforms";
import { CurrentOpenings } from "./NavBar/CurrentOpenings";
import "./App.css";
import { AboutUs } from "./NavBar/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/talkToZeela" element={<TalkToZeela />} />
              <Route path="/onBoard" element={<Onboard />} />
              <Route
                path="/sourcingPlatforms"
                element={<SourcingPlatForms />}
              />
              <Route path="/currentOpenings" element={<CurrentOpenings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
