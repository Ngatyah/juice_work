import React from "react";
import "./buttonCard.css";
import { BsFonts } from "react-icons/bs";
import { H1, EXPANDABLE_H1 } from "../../constants";

/**
 * This is the popup Button component
 * @param {function} setType function that set the selected type
 * @param {function} setText function that set the input text
 * @param {string}   text user input
 * @returns {JSX}     popup Button component
 */
const ButtonCard = ({ setType, setText, text }) => {
  /**
   * Update user Inputs & selected tag
   * @param {string} type user selected tag
   */
  const typeSelector = (type) => {
    const actualText = text.split(/^\/1/gm)[1];
    setText(actualText);
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
      <button data-testid={H1} className="btn" onClick={() => typeSelector(H1)}>
        <BsFonts className="icon" />
        <div className="details">
          <h5>Heading 1</h5>
          <small>Shortcut: type # + space</small>
        </div>
      </button>
      <button
        data-testid={EXPANDABLE_H1}
        className="btn"
        onClick={() => typeSelector(EXPANDABLE_H1)}
      >
        <BsFonts className="icon" />
        <div className="details">
          <h5>Expandable Heading 1</h5>
          <small>Shortcut: type {">>"}# + space</small>
        </div>
      </button>
    </div>
  );
};

export default ButtonCard;
