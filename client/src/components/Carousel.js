import React from "react";
import { useImage } from "../context/ImageContext";
import { Spinner } from "react-bootstrap";
import "./Carousel.css";

export const Carousel = () => {
  const { images, index, getActive, loading, setIndex } = useImage();
  const active = getActive();

  // conditionally set the value of the title
  var title;
  if (active === "all") title = "Cats 🐱 & Sharks 🦈";
  else if (active === "cat") title = "Cats 🐱";
  else if (active === "shark") title = "Sharks 🦈";
  else title = "Select Animals";

  // return a spinner if API has not returned a value yet, otherwise display the cat/shark image and arrows
  return (
    <div className="image-container">
      <h1 className="title">{title}</h1>
      {loading ? (
        <div style={{ paddingTop: "5vh" }}>
          <Spinner
            animation="border"
            size="lg"
            style={{ height: "10rem", width: "10rem" }}
          />
        </div>
      ) : (
        <>
          {index > 0 && (
            <h1
              className="mt-5"
              style={{ float: "left", cursor: "pointer" }}
              onClick={() => setIndex(index - 1)}
            >
              ⏪
            </h1>
          )}
          <img src={images[index]} style={{ height: "40vh" }} />
          {index < images.length - 1 && (
            <h1
              className="mt-5"
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => setIndex(index + 1)}
            >
              ⏩
            </h1>
          )}
        </>
      )}
    </div>
  );
};
