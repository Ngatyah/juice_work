import React, { useEffect, useState } from "react";
import "./inputSection.css";
import ButtonCard from "../buttonCard/ButtonCard";
import { BiMenu } from "react-icons/bi";
import { EXPANDABLE_H1, H1 } from "../../constants";

/**
 * collects user inputs and displays it
 * @returns {JSX}
 */
const InputSection = () => {
  const initialPlaceHolder = "Type/ for blocks, @ to link docs or people";
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState();
  const [userInputs, setUserInput] = useState([{ type: null, text: "" }]);
  const [placeholder, setPlaceholder] = useState(initialPlaceHolder);

  /**
   * Handle user click event, update user inputs and filter heading characters
   * @param {click event} e click event listen
   */

  const onChangeHandler = (e) => {
    if (e.target.value.match(/^\/1/gm)) {
      setPopup(true);
      setPlaceholder("Heading 1");
    } else if (e.target.value.match(/^\/\+1/gm)) {
      setType();
      let textValue = e.target.value.split(/^\/\+1/gm)[1];
      e.target.value = textValue;
    }
    if (popup) {
      setPopup(false);
    }
    setText(e.target.value);
  };

  /**
   * Handles user Clicks and update state
   * @param {key event} e key click event
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setType(null);
      setPlaceholder(initialPlaceHolder);
      let newUserInput = { type: type, text: text };
      if (type === EXPANDABLE_H1) {
        newUserInput = { ...newUserInput, isClosed: false };
      }
      setUserInput([newUserInput, ...userInputs]);

      setText("");
    }
  };
  /**
   * handle expandable functionality
   * @param {index} index input index in the input array
   */
  function expandableHandler(index) {
    const allData = [...userInputs];
    allData[index]["isClosed"] = !allData[index]["isClosed"];
    setUserInput(allData);
  }

  useEffect(() => {
    function popupHandler() {
      if (type === H1) {
        setPopup(false);
      } else if (type === EXPANDABLE_H1) {
        setPopup(false);
      }
    }

    popupHandler();
  }, [popup, type]);

  /**
   * display text
   * return a map of all user inputs in their respective tags
   */
  const userInputsElement = userInputs
    .map((item, index) => {
      if (item.type === H1) {
        return <h1 key={index}>{item.text}</h1>;
      } else if (item.type === EXPANDABLE_H1) {
        return (
          <span key={index}>
            <BiMenu
              onClick={() => expandableHandler(index)}
              className="expand_icon"
            />
            {!item.isClosed && <h1>{item.text}</h1>}
          </span>
        );
      } else {
        return <p key={index}>{item.text}</p>;
      }
    })
    .reverse();
  return (
    <div className="output_div">
      {userInputsElement}
      <input
        data-testid="input"
        value={text}
        className={type ? "heading" : ""}
        name="text"
        onChange={onChangeHandler}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      {popup && <ButtonCard setType={setType} setText={setText} text={text} />}
    </div>
  );
};

export default InputSection;
