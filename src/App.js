import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Project from './routes/projects';
import Experience from './routes/experience';
import About from "./routes/about";
import Articles from "./routes/articles";
import Hobbies from "./routes/hobbies";
import Publications from "./routes/publications";
import References from "./routes/references";

import Navbar from './component/navBar';
import Footer from './component/footer';
import QuickChat from "./component/quickChat";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const names = { '/': 'Research', '/projects': 'Projects', '/publications': 'Publications', '/experience': 'Experience', '/lr': 'Experience', '/articles': 'Writing', '/hobbies': 'Beyond research', '/references': 'References' };
    document.title = `${names[location.pathname] || 'Page not found'} · Samundra Karki`;
  }, [location.pathname]);
  const hideNavbar = location.pathname === "/references";

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById('main-content');
        if (main) {
          main.setAttribute('tabindex', '-1');
          main.focus();
          main.scrollIntoView();
        }
      }}>Skip to content</a>
      {!hideNavbar ? <Navbar /> : null}
      {location.pathname === "/hobbies" && <QuickChat />}
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/publications" element={<Publications />} />
        <Route exact path="/references" element={<References />} />
        <Route exact path="/blogs" element={<Navigate to="/articles" replace />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/hobbies" element={<Hobbies />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<main id="main-content" className="page container-wide"><h1>Page not found</h1><p>Find your way back through the navigation above.</p><a className="inline-link" href="#/">Back to home ↗</a></main>} />
        <Route exact path="/lr" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
