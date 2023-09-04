import "../blocks/Meme.css";
import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMemeImage(url);
  }
  return (
    <main className="meme-container">
      <div className="form">
        <input className="form-input" type="text" placeholder="Top Text" />
        <input className="form-input" type="text" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className="meme-image" src={memeImage} />
    </main>
  );
}
