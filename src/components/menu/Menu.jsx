import "./menu.scss";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    // if menueOpen is true, it will open actvie class
  
    <div className={"menu "+(menuOpen && "active")}>
      
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          {/* #intro is an id name in Intro.jsx */}
          <a href="#intro">Home</a>
          
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
          
        </li>
      </ul>
      
    </div>
    
  );
}
