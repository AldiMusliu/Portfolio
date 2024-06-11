"use client";
import React, { useEffect, useState } from "react";
import { Stage, Container, Sprite, useTick, Text, Graphics } from "@pixi/react";

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0);

  useTick((delta) => delta && setRotation((prev) => prev + 0.009 * delta));

  return (
    <Sprite
      image="/images/error404.webp"
      anchor={0.5}
      scale={2}
      rotation={rotation}
    />
  );
};

const FloatingText = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({
    x: 1,
    y: 1,
  });

  useTick((delta) => {
    setPosition((prevPosition) => {
      let newX = prevPosition.x + direction.x * delta * 0.5;
      let newY = prevPosition.y + direction.y * delta * 0.5;

      if (newX > window.innerWidth || newX < 0) {
        newX = newX < 0 ? window.innerWidth : 0;
      }
      if (newY > window.innerHeight || newY < 0) {
        newY = newY < 0 ? window.innerHeight : 0;
      }

      return { x: newX, y: newY };
    });
  });

  useEffect(() => {
    const changeDirection = () => {
      setDirection({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });
    };
    const intervalId = setInterval(changeDirection, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Text
      text="Page Not Found"
      anchor={0.5}
      style={
        {
          fontFamily: "Arial",
          fontSize: 48,
          fill: ["#ffbd39"],
          stroke: "#000",
          strokeThickness: 2,
          dropShadow: true,
          dropShadowColor: "#000000",
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          fontWeight: "bold",
        } as any
      }
      x={position.x}
      y={position.y}
    />
  );
};

const BackgroundParticles = ({
  width,
  height,
  count,
}: {
  width: number;
  height: number;
  count: number;
}) => {
  const particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
  }));

  useTick(() => {
    particles.forEach((p) => {
      p.y += 0.5;
      if (p.y > height) p.y = 0;
    });
  });

  return (
    <Graphics
      draw={(g) => {
        g.clear();
        g.beginFill(0xffffff, 0.3);
        particles.forEach((p) => g.drawCircle(p.x, p.y, p.radius));
        g.endFill();
      }}
    />
  );
};

const PixiApp = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
      <BackgroundParticles
        width={dimensions.width}
        height={dimensions.height}
        count={2000}
      />
      <Container
        position={[dimensions.width / 2, dimensions.height / 2]}
        rotation={0.01}
        anchor={0.5}
      >
        <RotatingBunny />
        <FloatingText />
      </Container>
    </Stage>
  );
};

export default PixiApp;
