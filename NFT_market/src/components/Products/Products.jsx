import React from "react";
import ImgJan from "../../assets/month/output0.jpg";
import ImgFeb from "../../assets/month/output1.jpg";
import ImgMar from "../../assets/month/output2.jpg";
import ImgApr from "../../assets/month/output3.jpg";
import ImgMay from "../../assets/month/output4.jpg";
import ImgJun from "../../assets/month/output5.jpg";
import ImgJul from "../../assets/month/output6.jpg";
import ImgAug from "../../assets/month/output7.jpg";
import ImgSep from "../../assets/month/output8.jpg";
import ImgOct from "../../assets/month/output9.jpg";
import ImgNov from "../../assets/month/output10.jpg";
import ImgDec from "../../assets/month/output11.jpg";

// NFT data for each month
const NFTData = [
  { id: 1, img: ImgJan, month: "January" },
  { id: 2, img: ImgFeb, month: "February" },
  { id: 3, img: ImgMar, month: "March" },
  { id: 4, img: ImgApr, month: "April" },
  { id: 5, img: ImgMay, month: "May" },
  { id: 6, img: ImgJun, month: "June" },
  { id: 7, img: ImgJul, month: "July" },
  { id: 8, img: ImgAug, month: "August" },
  { id: 9, img: ImgSep, month: "September" },
  { id: 10, img: ImgOct, month: "October" },
  { id: 11, img: ImgNov, month: "November" },
  { id: 12, img: ImgDec, month: "December" },
];

const NFTMarketplace = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-primary" style={{ fontSize: '22px' }}>
            Explore NFTs by Month
          </p>

          <h1 data-aos="fade-up" className="text-3xl font-bold">
            NFT Marketplace
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400" style={{fontSize:'16px'}}>
            Browse exclusive NFTs available for each month of the year.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {/* NFT card section */}
            {NFTData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.id * 100}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.month}
                  className="h-[230px] w-[170px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.month}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplace;
