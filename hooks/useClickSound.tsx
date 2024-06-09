import { useRef } from "react";

const useClickSound = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return { audioRef, playSound };
};

export default useClickSound;
