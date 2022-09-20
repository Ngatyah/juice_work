import React from "react";
import "./buttonCard.css";
import { BsFonts } from "react-icons/bs";

const ButtonCard = ({ setType, setText, text }) => {
  const typeSelector = (type) => {
    const actualText = text.split(/^\/1/gm)[1];
    setText(actualText);
    console.log(type);
    setType(type);
  };
  return (
    <div className="card">
      <div className="description">
        <h5>Add blocks</h5>
        <div className="details">
          <small>Keep typing to filter, or escape to exit</small>
        </div>
      </div>
      <small className="keyword_class">
        Filtering keyword <span>1</span>{" "}
      </small>
      <div className="btn" onClick={() => typeSelector("h1")}>
        <BsFonts className="icon" />
        <div className="details">
          <h5>Heading 1</h5>
          <small>Shortcut: type # + space</small>
        </div>
      </div>
      <div className="btn" onClick={() => typeSelector("eh1")}>
        <BsFonts className="icon" />
        <div className="details">
          <h5>Expandable Heading 1</h5>
          <small>Shortcut: type {">>"}# + space</small>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
