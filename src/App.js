import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ZeelaOnBoard } from "./NavBar/ZeelaOnBoard";
import "./App.css";
import { AboutUs } from "./NavBar/AboutUs/AboutUs";
import { DepartMents } from "./NavBar/Departments/Departments";
import { Careers } from "./NavBar/Careers/Careers";

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
              <Route path="/zeelaOnBoard" element={<ZeelaOnBoard />} />
              <Route path="/departments" element={<DepartMents />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
