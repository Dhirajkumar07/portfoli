import React from "react";
import img1 from './images/homepage.gif'
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        para="we are the team of talented developer making websites"
        btname="Get Started"
        link='/service'
        img={img1}
      />
    </>
  );
};
export default Home;
