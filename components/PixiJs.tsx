import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";

const PixiBarChart = ({ data }: { data: number[] }) => {
  const pixiContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });

    if (pixiContainer.current) {
      pixiContainer.current.appendChild(app.view);
    }

    // Bar chart rendering
    const barWidth = 50;
    const barSpacing = 20;
    const maxBarHeight = 500;

    data.forEach((value, index) => {
      const barHeight = (value / 100) * maxBarHeight;
      const bar = new PIXI.Graphics();
      bar.beginFill(0xde3249);
      bar.drawRect(
        index * (barWidth + barSpacing),
        maxBarHeight - barHeight,
        barWidth,
        barHeight
      );
      bar.endFill();
      app.stage.addChild(bar);
    });

    // Clean up on unmount
    return () => {
      app.destroy(true, true);
    };
  }, [data]);

  return <div ref={pixiContainer} />;
};

export default PixiBarChart;
