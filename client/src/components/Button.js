import React from "react";
import { useImage } from "../context/ImageContext";
import "./Button.css";

export const Button = ({ title, type }) => {
  const { updateImages, getActive } = useImage();
  var active = false;
  if (getActive() === "all" || getActive() === type) active = true;
  return (
    <div
      className={active ? "button active" : "button"}
      onClick={() => updateImages(title)}
    >
      <h1>{title}</h1>
    </div>
  );
};
