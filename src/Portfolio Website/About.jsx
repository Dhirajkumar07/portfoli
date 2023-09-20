import React from "react";
import Common from "./Common";
import img2 from "./images/mernstack-img.gif";
const About = () => {
  return (
    <>
      <Common
        name="This is About page"
        para="we are the team of tailented developer making websites"
        btname="Contact Now"
        link="/contact"
        img={img2}
      />
    </>
  );
};
export default About;
