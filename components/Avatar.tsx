"use client";
import React, { useEffect, useState } from "react";
import {
  Stage,
  Container,
  Sprite,
  useTick,
  Text,
  Graphics,
  useApp,
} from "@pixi/react";

const StarField = ({
  width,
  height,
  count,
}: {
  width: number;
  height: number;
  count: number;
}) => {
  const [stars, setStars] = useState<{ x: number; y: number; speed: number }[]>(
    []
  );

  useEffect(() => {
    const newStars = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, [count, width, height]);

  useTick(() => {
    setStars((prevStars: any) =>
      prevStars.map((star: any) => {
        let newY = star.y + star.speed;
        if (newY > height) newY = 0;
        return { ...star, y: newY };
      })
    );
  });

  return (
    <Graphics
      draw={(g) => {
        g.clear();
        g.beginFill(0xffffff);
        stars.forEach((star) => g.drawRect(star.x, star.y, 2, 2));
        g.endFill();
      }}
    />
  );
};

const AvatarWithText = ({ onPortfolioClick }: { onPortfolioClick: any }) => {
  const app = useApp();
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({
    x: app.screen.width / 2,
    y: app.screen.height / 2,
  });
  const [showPortfolioPointText, setShowPortfolioPointText] = useState(true);
  const [portfolioPointPosition, setPortfolioPointPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: Math.random() * app.screen.width,
    y: Math.random() * app.screen.height,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPortfolioPointText(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  useTick((delta) => {
    if (rotation < Math.PI * 6) {
      setRotation((prev) => prev + 0.009 * delta);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "ArrowLeft") {
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
      } else if (e.key === "ArrowRight") {
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
      } else if (e.key === "ArrowUp") {
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
      } else if (e.key === "ArrowDown") {
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(position.x - portfolioPointPosition.x, 2) +
        Math.pow(position.y - portfolioPointPosition.y, 2)
    );
    if (distance < 50) {
      setShowPortfolioPointText(false);
      onPortfolioClick();
      setPortfolioPointPosition({
        x: Math.random() * app.screen.width,
        y: Math.random() * app.screen.height,
      });
    }
  }, [position, onPortfolioClick]);

  return (
    <Container>
      <Sprite
        image="/images/myavatar.png"
        anchor={0.5}
        scale={0.5}
        rotation={rotation}
        x={position.x}
        y={position.y}
        pointerdown={(e) => {
          const newPosition = e.data.getLocalPosition(e.target.parent);
          setPosition(newPosition);
        }}
      />
      {showPortfolioPointText && (
        <Text
          text="Move avatar to this point to view portfolio"
          anchor={0.5}
          style={
            {
              fontFamily: "Arial",
              fontSize: 16,
              fill: ["#ffffff"],
              stroke: "#000",
              strokeThickness: 1,
            } as any
          }
          x={portfolioPointPosition.x}
          y={portfolioPointPosition.y - 30}
        />
      )}
      <Graphics
        draw={(g) => {
          g.beginFill(0xffbd39);
          g.drawCircle(portfolioPointPosition.x, portfolioPointPosition.y, 10);
          g.endFill();
        }}
      />
    </Container>
  );
};
const PixiApp = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handlePortfolioClick = () => {
    window.location.href = "/portfolio";
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stage
      width={dimensions.width}
      height={dimensions.height}
      options={{ backgroundColor: 0x0c0c0c }}
    >
      <StarField
        width={dimensions.width}
        height={dimensions.height}
        count={100}
      />
      <AvatarWithText onPortfolioClick={handlePortfolioClick} />
    </Stage>
  );
};

export default PixiApp;
