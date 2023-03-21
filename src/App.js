import React from 'react';
import { Header } from 'components/Header';

export const App = () => {
  return (
    <div>
      <Header
        title="Get ready for adventure!"
        link="about"
        link1="trips"
        link2="pricing"
        link3="contact" />

    </div>
  )
}

// header could be good to have static as its not changing
// but now we do it dynamic as we want it to be reusable