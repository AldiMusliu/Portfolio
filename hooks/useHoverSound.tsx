import { useRef } from "react";

const useHoverSound = (src: string) => {
  const audioRef = useRef(new Audio(src));

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return { playSound };
};

export default useHoverSound;
