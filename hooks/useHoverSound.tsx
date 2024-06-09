import { useRef, useEffect } from "react";

const useHoverSound = (src: string) => {
  const audioRef = useRef<InstanceType<typeof Audio> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(src);
    }
  }, [src]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return { playSound };
};

export default useHoverSound;
