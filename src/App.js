import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import Bio from '../src/Pages/Bio/Bio';
import Home from '../src/Pages/Home/Home';
import Footer from "../src/Components/Footer/Footer";
import Contact from "../src/Pages/Contact/Contact";
import Swing from "../src/Pages/Swing/Swing";
import Gallery from './Pages/Gallery/Gallery';
import Schedule from './Pages/Schedule/Schedule';
import News from './Pages/News/News';
import Service from './Pages/Service/Service';
import Interview from './Pages/Interviews/Interview';
import Academic from "./Pages/Academic/Academics"
import MobileNav from './Components/MobileNav/MobileNav';


function App() {
  return (
    <div className="App">
      <Nav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="biography" element={<Bio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="swing" element={<Swing />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="news" element={<News />} />
        <Route path="community-service" element={<Service />} />
        <Route path="interview" element={<Interview />} />
        <Route path="school-records" element={<Academic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
