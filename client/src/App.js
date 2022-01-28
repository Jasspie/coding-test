import React from "react";
import { ImageProvider } from "./context/ImageContext";
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import "./main.css";

export const App = () => {
  return (
    <ImageProvider>
      <div className="container">
        <Carousel />
        <Button type="cat" title="Cats" />
        <Button type="shark" title="Sharks" />
      </div>
    </ImageProvider>
  );
};
