import React from 'react';

const NftCard = ({ imageUrl, title, owner, price, ethPrice, saleEndTime }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      {/* NFT Image */}
      <img className="w-full" src={imageUrl} alt={title} />
      
      <div className="px-6 py-4">
        {/* Title */}
        <div className="font-bold text-xl mb-2">{title}</div>

        {/* Owner Information */}
        <p className="text-sm text-gray-400">
          Owned by <span className="text-blue-400">{owner}</span>
        </p>

        {/* Price */}
        <div className="mt-4">
          <p className="font-semibold">
            Current Price: <span className="text-yellow-500">{ethPrice} ETH</span>
          </p>
          <p className="text-sm text-gray-400">(${price})</p>
        </div>

        {/* Sale End Time */}
        <div className="mt-4">
          <p className="text-xs text-gray-400">Sale ends on {saleEndTime}</p>
        </div>

        {/* Buy Now Button */}
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
