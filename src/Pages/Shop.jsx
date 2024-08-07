import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/popular';
import Offers from '../Components/Offers/offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/Newsletter/Newsletter';

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default shop