import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const ImageContext = React.createContext();

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState({ cat: true, shark: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const api = axios.create({
        baseURL:
          process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/images",
      });

      var endpoint;
      if (active["cat"] && active["shark"]) endpoint = "/all";
      else if (active["cat"] && !active["shark"]) endpoint = "/cat";
      else if (!active["cat"] && active["shark"]) endpoint = "/shark";
      else endpoint = null;

      const { data } = await api.get(endpoint);
      setImages(data);
    };
    setLoading(true);
    getImages();
    setLoading(false);
  }, [active]);

  const updateImages = (type) => {
    switch (type) {
      case "cat":
        return setActive((a) => !a["cat"]);
      case "shark":
        return setActive((a) => !a["shark"]);
      default:
        return null;
    }
  };

  const value = {
    images,
    loading,
    updateImages,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
