// src/components/NFTAnimation.jsx
import React from "react";
import Spline from "@splinetool/react-spline";

const NFTAnimation = () => {
  return (
    <div className="h-full w-full">
      {/* 3D Spline Animation */}
      <Spline scene="https://prod.spline.design/XYZ-1234-PLACEHOLDER" />
    </div>
  );
};

export default NFTAnimation;
