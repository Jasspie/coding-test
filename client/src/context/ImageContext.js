import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const ImageContext = React.createContext();

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState({ cat: false, shark: false });
  const [loading, setLoading] = useState(false);

  // useEffect to call the api whenever a button is clicked, which changes the value of active
  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      var endpoint = getActive();
      if (endpoint) {
        const url =
          process.env.REACT_APP_BASE_URL ||
          `http://localhost:5000/api/images/${endpoint}`;
        const { data } = await axios.get(url);
        // slight delay is added so that spinner can be seen for longer
        await new Promise((resolve) => setTimeout(resolve, 150));
        setIndex(0);
        setImages(data);
      } else {
        setIndex(0);
        setImages([]);
      }
      setLoading(false);
    };
    getImages();
  }, [active]);

  // function to reverse the boolean whenever the button is clicked
  const updateImages = (type) => {
    switch (type) {
      case "Cats":
        return setActive((prev) => ({
          ...prev,
          cat: !active["cat"],
        }));
      case "Sharks":
        return setActive((prev) => ({
          ...prev,
          shark: !active["shark"],
        }));
      default:
        return null;
    }
  };

  // helper function to return the current active status
  const getActive = () => {
    const cat = active["cat"];
    const shark = active["shark"];
    if (cat && shark) return "all";
    else if (cat && !shark) return "cat";
    else if (!cat && shark) return "shark";
    else return null;
  };

  const value = {
    images,
    index,
    loading,
    updateImages,
    getActive,
    setIndex,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
