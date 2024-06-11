import dynamic from "next/dynamic";

const PixiApp = dynamic(() => import("../components/Error404"), {
  ssr: false,
});

const NotFound = () => {
  return <PixiApp />;
};

export default NotFound;
