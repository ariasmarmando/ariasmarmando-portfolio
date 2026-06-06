import { useState, useEffect } from "react";
import "../CSS/skills.css";

const Skill = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 1200); // tighter range: max 1.2s
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
      <div className={visible ? "Skills" : "Skills Skills--hidden"}>
        {props.iconIMG && (
            <img src={props.iconIMG} alt={props.skillName} />
        )}
        <span>{props.skillName}</span>
      </div>
  );
};

export default Skill;