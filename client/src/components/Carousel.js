import React from "react";
import { useImage } from "../context/ImageContext";
import { Spinner } from "react-bootstrap";
import "./Carousel.css";

export const Carousel = () => {
  const { images, index, getActive, loading } = useImage();
  const active = getActive();
  var title;
  if (active === "all") title = "Cats 🐱 & Sharks 🦈";
  else if (active === "cat") title = "Cats 🐱";
  else if (active === "shark") title = "Sharks 🦈";
  else title = "Select Animals";

  console.log(loading);
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
        images.length > 0 && (
          <>
            <h1 className="mt-5" style={{ float: "left" }}>
              ⏪
            </h1>
            <img src={images[index]} style={{ height: "40vh" }} />
            <h1 className="mt-5" style={{ float: "right" }}>
              ⏩
            </h1>
          </>
        )
      )}
    </div>
  );
};
