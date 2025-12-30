import './App.css';
import { Routes, Route } from "react-router-dom";

import Project from './routes/projects';
import Experience from './routes/experience';
import About from "./routes/about";
import Blogs from "./routes/blogs";
import Articles from "./routes/articles";
import Hobbies from "./routes/hobbies";

import Navbar from './component/navBar';
import Footer from './component/footer';
import QuickChat from "./component/quickChat";

function App() {
  return (
    <>
      <Navbar />
      <QuickChat />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/hobbies" element={<Hobbies />} />
        <Route exact path="/lr" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
