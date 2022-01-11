import "./topbar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Person, Mail, GitHub, YouTube} from "@material-ui/icons";
import {FaGithub, FaYoutube} from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Osman
          </a>
          <div className="itemContainer">
            <Person className="icon" />            
          </div>
          <span>+1 647 703 8786</span>
          <div className="itemContainer">
            <Mail className="icon" onClick={event =>  window.location.href='https://www.gmail.com'} />            
          </div>
          <span>osmanarri1984@gmail.com</span>
          
          <div className="itemContainer">
            <GitHub className="icon" onClick={event =>  window.location.href='https://github.com/osmanarri'}/>           
          </div>

          <div className="itemContainer">          
            <YouTube className="icon" onClick={event =>  window.location.href='https://www.youtube.com/channel/UC5IUGKzjExJLu1R1kAct-Ow'} />           
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
