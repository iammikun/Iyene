import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav'
import OffCourse from '../src/Pages/Off Course/OffCourse';
import OnCourse from '../src/Pages/On Course/OnCourse';
import Bio from '../src/Pages/Bio/Bio';
import Home from '../src/Pages/Home/Home';
import Footer from "../src/Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bio" element={<Bio />} />
        <Route path="offcourse" element={<OffCourse />} />
        <Route path="oncourse" element={<OnCourse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
