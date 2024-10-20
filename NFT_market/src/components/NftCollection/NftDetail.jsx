import React from 'react';
import NftCard from './components/NftCard';

const App = () => {
  const nftData = {
    imageUrl: 'https://img.khetivyapar.com/images/news/1706332739-today-27-january-2024-wheat-market-rates-in-madhya-pradesh.jpg',  // Replace with the actual image URL
    title: 'GOMBLE - SpaceKids: Pill',
    owner: 'bbbb11',
    price: '413.16',
    ethPrice: '0.1564',
    saleEndTime: 'October 21, 2024, 7:25 AM',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <NftCard
        imageUrl={nftData.imageUrl}
        title={nftData.title}
        owner={nftData.owner}
        price={nftData.price}
        ethPrice={nftData.ethPrice}
        saleEndTime={nftData.saleEndTime}
      />
    </div>
  );
};

export default App;
