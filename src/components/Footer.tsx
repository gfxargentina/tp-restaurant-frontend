import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="xs:flex xs:flex-col md:flex h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 text-center items-center md:justify-between">
      <Link href="/" className="font-bold">
        PizzaRest
      </Link>
      <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
