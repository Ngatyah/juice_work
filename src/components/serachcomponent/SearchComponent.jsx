import React from "react";
import "./searchComponent.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiArrowDownLeft, FiCloud } from "react-icons/fi";
import { BsCheck2Circle, BsThreeDotsVertical } from "react-icons/bs";
import { GiRabbitHead } from "react-icons/gi";

const SearchComponent = () => {
  return (
    <div>
      <div className="search__bar">
        <div className="icons_collection">
          <h3 className="search__icon">P</h3>
          |
          <AiOutlineClockCircle />
          <p>0min</p>
          |
          <GiRabbitHead className="bunny_icon" />
          |
          <FiArrowDownLeft />0
        </div>
        <input className="search_input" />
        <div className="icons_collection">
          <BsCheck2Circle />
          <FiCloud className="cloud_icon" />
          <BsThreeDotsVertical className="dots_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
