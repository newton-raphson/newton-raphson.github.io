import './App.css';
import { Routes, Route } from "react-router-dom";

import Project from './routes/projects';
import Experience from './routes/experience';
import About from "./routes/about";

import Navbar from './component/navBar';
import Footer from './component/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/lr" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
