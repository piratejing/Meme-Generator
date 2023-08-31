import "../blocks/Header.css";
import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={trollFace} alt="troll-face"></img>
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </div>
  );
}
