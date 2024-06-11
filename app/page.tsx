import dynamic from "next/dynamic";

const MyAvatar = dynamic(() => import("../components/Avatar"), {
  ssr: false,
});

const Home = () => {
  return <MyAvatar />;
};

export default Home;
