import React from "react";
import { ImageProvider } from "./context/ImageContext";

export const App = () => {
  return (
    <ImageProvider>
      <div>hi</div>
    </ImageProvider>
  );
};
