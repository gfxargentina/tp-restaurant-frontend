'use client';
import React from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date('2023-12-24');

const CountDown = () => {
  return (
    <Countdown
      className="text-yellow-300 text-5xl font-bold "
      date={endingDate}
    />
  );
};

export default CountDown;
