import "../blocks/Meme.css";
import React from "react";

export default function Meme() {
  return (
    <div className="meme-container">
      <form className="form">
        <input className="form-input" type="text" placeholder="Top Text" />
        <input className="form-input" type="text" placeholder="Bottom Text" />
        <button className="form-button">Get a new meme image</button>
      </form>
    </div>
  );
}
