import React from "react";
import { FaStar } from "react-icons/fa";

// Update the paths to reflect your NFT images.
import Img1 from "../../assets/nftimg/farming0.jpeg";
import Img2 from "../../assets/nftimg/farming1.jpg";
import Img3 from "../../assets/nftimg/farming2.webp";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Farmers DAO NFT",
    description:
      "Empower local farmers with the decentralized Farmers DAO initiative.",
  },
  {
    id: 2,
    img: Img2,
    title: "Sustainable Farming NFT",
    description:
      "Support eco-friendly farming practices with this unique NFT.",
  },
  {
    id: 3,
    img: Img3,
    title: "Fair Trade NFT",
    description:
      "Help create a fairer market for farmers through blockchain technology.",
  },

];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Header section */}
      <div className="text-left mb-12">
        <p data-aos="fade-up" className="text-sm text-primary"style={{ fontSize: '22px' }}>
          Trending NFTs
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best NFTs
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400"style={{ fontSize: '16px' }}>
          Explore top NFTs that are trending in the decentralized market.
        </p>
      </div>

      {/* Grid for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
          >
            {/* Image section */}
            <div className="flex justify-center -mt-10">
              <img
                src={data.img}
                alt={data.title}
                className="h-[200px] object-cover rounded-lg shadow-md transform group-hover:scale-105 duration-300"
              />
            </div>

            {/* Details section */}
            <div className="p-6 text-center">
              {/* Star rating */}
              <div className="flex items-center justify-center gap-1 mb-3">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold mb-2">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm mb-4 line-clamp-2">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
