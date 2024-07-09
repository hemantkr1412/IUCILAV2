import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/navbar/Sidebar";
import Footer from "./Components/footer/Footer";
import "./App.css";

import Home from "./Components/home/Home";
import Comunidad from "./Components/comunidad/Comunidad";
import Institute from "./Components/institute/Institute";
import Propuesta from "./Components/propuesta/Propuesta";
import Noticias from "./Components/noticias/Noticias";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comunidadAcademica" element={<Comunidad />} />
            <Route path="/institucional" element= {<Institute />} />
            <Route path="/propuestaAcademica" element={<Propuesta />} />
            <Route path="/noticias" element={<Noticias/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
