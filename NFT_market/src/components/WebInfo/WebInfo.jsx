import React from "react";

const Welcome = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-orange-100 dark:bg-gray-900 transition-all duration-300">
      <div className="flex w-4/5 h-1/2">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center space-y-5">
          <h1 className="text-5xl font-bold text-orange-700 dark:text-orange-400 transition-all duration-300">
            Welcome to NFT Farming
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg transition-all duration-300">
            Own a piece of the digital farm and grow your investments! By becoming a part
            of the NFT farming ecosystem, you can invest in digital representations of
            real-world sustainable farming efforts. Our platform offers unique, one-of-a-kind 
            farming NFTs that not only appreciate in value over time but also contribute 
            to the empowerment of local farmers.
            <br /><br />
            These NFTs allow you to support eco-friendly agriculture while earning rewards 
            from crop yields and agricultural ventures. Your investment will help promote 
            sustainable farming practices, ensuring better productivity and environmental 
            health. Explore rare digital collectibles tied to real-world farming assets, 
            and join a community of like-minded individuals who believe in the future of 
            decentralized, responsible agriculture.
            <br /><br />
            Start your journey with us today and discover the potential of combining 
            cutting-edge blockchain technology with traditional farming for a greener 
            tomorrow.
          </p>
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 dark:bg-orange-600 dark:hover:bg-orange-500 transition-all duration-200">
            Explore NFTs
          </button>
        </div>

        {/* 3D Animation */}
        <div className="w-1/2">
          {/* Add your 3D animation component or content here */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
