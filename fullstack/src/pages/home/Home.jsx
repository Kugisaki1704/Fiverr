import React, { createRef } from 'react';
import "./Home.scss"
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import {cards} from "../../data";



const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide>
        {cards.map((card) => (
          <div key={card.id} className='carousel-item'>
            <CatCard item={card} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Home;