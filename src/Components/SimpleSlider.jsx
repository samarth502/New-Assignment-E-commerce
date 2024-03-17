




// import img1 from "../img/banner-image.png"
// import img2 from "../img/Screenshot 2024-03-15 172436.png"


// import React from 'react';
// import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
// export default function SimpleSlider({ slides }) {
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   return (
//     <div className="overflow-hidden relative w-[50%] max-2xl:w-full m-auto  ">
//       <p className="absolute top-[400px] left-36 z-30 text-center text-6xl font-extrabold text-white xs:text-3xl xs:top-60 xs:left-16 sm:top-80 sm:left-36 md:top-[400px] md:left-52 md:text-4xl">Get START<br></br> YOUR FAVRIOT SHOPPING</p>
//       <button className="z-20 bg-black text-white absolute top-[500px] right-96 px-9 py-2 text-2xl font-extrabold rounded-2xl xs:top-[350px] xs:left-40 xs:text-sm xs:w-44 sm:top-[400px] sm:left-64 md:top-[500px] md:left-96">Buy Now</button>
//       <div
//         className={`flex transition ease-out duration-40`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((s) => {
//           return <img src={s} />;
//         })}
//       </div>

//       <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
//         <button onClick={previousSlide} className="">
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button onClick={nextSlide}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div>

//       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {slides.map((s, i) => {
//           return (
//             <div
//               onClick={() => {
//                 setCurrent(i);
//               }}
//               key={"circle" + i}
//               className={`rounded-full w-5 h-5 cursor-pointer  ${
//                 i == current ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/banner-image.png"
import img2 from "../img/newOnes.jpeg"




// Slider.js


// // Slider.js
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SimpleSlider = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
        <FaChevronRight className="text-3xl z-30 text-gray-500" onClick={onClick} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute z-30 top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
        <FaChevronLeft className="text-3xl text-gray-500" onClick={onClick} />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  

  return (
    <div className="2xl:w-[70%] lg:w-full m-auto xs:mt-7 xs:w-full max-xs:mt-14">
    <Slider {...settings} >
      <div className=" relative">
      <div className=" absolute bottom-14 right-28 flex flex-col justify-center items-center gap-4 xs:text-2xl xs:right-0 sm:bottom-20 sm:right-0 w-full max-xs:right-0 max-xs:bottom-6 ">
          <h1 className="lg:text-6xl 2xl:text-7 xl text-center font-extrabold text-white sm:text-4xl xs:text-4xl md:text-5xl ">GET START<br/> YOUR FAVRIOT SHOPPING</h1>
          <button className="bg-black text-xl px-12 py-5 w-52 text-white rounded-xl font-extrabold xs:px-4 max-xs:p-2 max-xs:text-sm  max-xs:w-36">BAY NOW</button>
        </div>
        <div className="flex justify-center items-center ">
          
          
        <img src={img1} alt="Slide 1" className=" md:w-[80%] lg:w-[60%] lg:h-full xs:w-full" />
        
        </div>
      </div>
      <div>
        
      <div className="">
        <div className="flex justify-center items-center h-[100%] py-28 ">

        <img src={img2} alt="Slide 2" className="w-[100%]" />
        </div>
      </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
};

export default SimpleSlider;



