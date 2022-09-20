import React, { useEffect, useState } from "react";
import "./inputSection.css";
import ButtonCard from "../buttonCard/ButtonCard";
import { BiMenu } from "react-icons/bi";

const InputSection = () => {
  const initialPlaceHolder = "Type/ for blocks, @ to link docs or people";
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState();
  const [userInput, setUserInput] = useState([{ type: null, text: "" }]);
  const [placeholder, setPlaceholder] = useState(initialPlaceHolder);

  const onChangeHandler = (e) => {
    if (e.target.value.match(/^\/1/gm)) {
      setPopup(true);
      setPlaceholder("Heading 1");
      console.log(type);
    } else if (e.target.value.match(/^\/+1/gm)) {
      setType();
    }
    if (popup) {
      setPopup(false);
    }
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setType(null);
      setPlaceholder(initialPlaceHolder);
      setUserInput([{ type: type, text: text }, ...userInput]);
      console.log(userInput);
      setText("");
    }
  };

  useEffect(() => {
    function popupHandler() {
      if (type === "h1") {
        setPopup(false);
      } else if (type === "eh1") {
        console.log("Expendable");
        setPopup(false);
      }
    }
    popupHandler();
  }, [popup, type]);

  const inputElement = userInput
    .map((item, index) => {
      console.log(item.type);
      if (item.type === "h1") {
        return <h1 key={index}>{item.text}</h1>;
      } else if (item.type === "eh1") {
        return (
          <span>
            <BiMenu className="expand_icon" />
            <h1 key={index}>{item.text}</h1>
          </span>
        );
      } else {
        return <p key={index}>{item.text}</p>;
      }
    })
    .reverse();
  return (
    <div className="output_div">
      {inputElement}
      <input
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
