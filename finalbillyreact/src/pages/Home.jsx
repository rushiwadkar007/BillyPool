import React from "react";

import Hero from "../components/HomePage/Hero";
import ComingSoon from "../components/HomePage/ComingSoon";
import Tokenomics from "../components/HomePage/Tokenomics";
import ComingSoon2 from "../components/HomePage/ComingSoon2";
import Gallery from "../components/HomePage/Gallery";
import Wrapper from "../components/UI/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <ComingSoon />
      <Tokenomics />
      <ComingSoon2 />
      <Gallery />
    </Wrapper>
  );
};

export default Home;
