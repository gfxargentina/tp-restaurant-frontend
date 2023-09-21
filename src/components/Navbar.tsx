import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';
import UserLinks from './UserLinks';

const Navbar = () => {
  return (
    <div className=" h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* MEDIUM SCREEN-LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">PizzaRest</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* MEDIUM SCREEN-RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static  flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
