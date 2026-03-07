import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import Project from './routes/projects';
import Experience from './routes/experience';
import About from "./routes/about";
import Blogs from "./routes/blogs";
import Articles from "./routes/articles";
import Hobbies from "./routes/hobbies";
import Publications from "./routes/publications";
import References from "./routes/references";

import Navbar from './component/navBar';
import Footer from './component/footer';
import QuickChat from "./component/quickChat";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/references";

  return (
    <>
      {!hideNavbar ? <Navbar /> : null}
      <QuickChat />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/publications" element={<Publications />} />
        <Route exact path="/references" element={<References />} />
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
