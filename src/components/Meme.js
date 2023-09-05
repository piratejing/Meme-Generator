import "../blocks/Meme.css";
import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img className="meme-image" src={meme.randomImage} />
    </main>
  );
}
