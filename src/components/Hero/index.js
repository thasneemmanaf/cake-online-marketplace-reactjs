import React from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn
} from './style';

function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Celebrate Your Happiness With A Piece of Cake </HeroH1>
          <HeroP>Ready in 2 hours</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
