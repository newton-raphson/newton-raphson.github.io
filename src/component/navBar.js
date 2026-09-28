import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cv from "../assets/cv/resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [["/", "About"], ["/publications", "Publications"], ["/projects", "Projects"], ["/experience", "Experience"], ["/articles", "Writing"], ["/hobbies", "Beyond research"]];
  return <header className="navbar-custom"><nav className="nav-inner container-wide" aria-label="Main navigation"><NavLink to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">sk<span>.</span></span><span>Samundra Karki</span></NavLink><button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button><div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive || (to === "/experience" && pathname === "/lr") ? "is-active" : ""}`}>{label}</NavLink>)}<a className="nav-resume" href={cv} target="_blank" rel="noreferrer">Academic CV ↗</a></div></nav></header>;
}
