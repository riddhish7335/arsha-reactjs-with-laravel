import { BrowserRouter, Route, Routes   } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Layouts/Header";
import Layout from "./Layouts/Layout";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import OurTeam from "./Components/OurTeam";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="our-team" element={<OurTeam />} />
              <Route path="faq" element={<Faq />} />
              <Route path="contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
