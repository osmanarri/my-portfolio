import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./projects.scss";
import {
  desktopProject,
  webProject,
  mobileProject,
  designProject,
  contentProject,
} from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("mobile");  
  const [data, setData] = useState([]);
  
  const list = [
    {
      id: "desktop",
      title: "Desktop App",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
      
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  const [house1, web, mobile] = list;
  

  useEffect(() => {
    switch (selected) {
      case "desktop":
        setData(desktopProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "mobile":
        setData(mobileProject);
        
        break;
      case "design":
        setData(designProject);
        break;
      case "content":
        setData(contentProject);
        break;
      default:
        setData(desktopProject);
    }
  }, [selected]);

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            
          />
          
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className={selected === "mobile" ? "item featured" : "item" }>
            <img
              src={d.img}
              alt=""              
            
            className="selected"/>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
