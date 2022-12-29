import React from 'react';
import { PageHOC } from '../components'

const Home = () => {
  return (
    <div>

    </div>
  )
};

export default PageHOC(
    Home,
    <>Welcome to AVAX GODS <br/> A Web 3 NFT Card Game</>,
    <>Connect Your Wallet to Start Playing <br/> The Ultimate Web 3 Battle Card Game</>,
);