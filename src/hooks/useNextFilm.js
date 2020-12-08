import { useEffect, useState } from "react";
//hooks
import { useLocalStorage } from "./useLocalStorage";

export const useNextFilm = () => {
  const [film, setFilm] = useState(null);
  const [position, setPosition] = useState(0);
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);
  const [value] = useLocalStorage("result", "");

  useEffect(() => {
      console.log("useEffect useNextFilm ");
      setFilm(value[position]);
    }, [value]);

  const checkLimit = (action) =>
    action ? position < value.length - 1 : position !== 0;

  const handleDisable = (newPosition) => {
    newPosition === 0 ? setDisableLeft(true) : setDisableLeft(false);
    newPosition === value.length - 1 ? setDisableRight(true) : setDisableRight(false);
  };

  const nextFilm = (action) => {
    console.log("nextFilm ", action);
    if (checkLimit(action)) {
      handleDisable(position + action);
      setPosition(position + action);
      setFilm(value[position + action]);
    }
  };

  return { film, disableRight, disableLeft, nextFilm, position };
};
