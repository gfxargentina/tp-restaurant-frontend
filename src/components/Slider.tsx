'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Always fresh and always crispy always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'The Best pizza to share with your family',
    image: '/slide3.jpg',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //loop del slider
  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       //  como el array de datos contiene solo 3 elementos con esta condicion vuelve a la
  //       //  posicion 0 o le suma 1, si la longitud de data es -1 muestra la posicion 0
  //       //si la longitud de data es 0 muestra la posicion 1 y asi ...
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    //lg:h-full lg:w-1/2 h:1/2 con flex-1 es lo mismo, si flex es horizontal el height sera de 100%
    //y el width 50%, si flex es vertical el height sera de 50% y el width 100%
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 ">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl md:p-10">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>

      <div className="flex-1 w-full  relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
