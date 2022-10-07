import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between py-5 px-16 bg-neutral-800 text-neutral-300">
      <div className="font-black text-4xl">LOGO</div>
      <div className="flex text-lg items-end">
        <a href="#" className="mx-5">About</a>
        <a href="#" className="mx-5">Who We Are</a>
        <a href="#" className="mx-5">What We Do</a>
        <a href="#" className="mx-5">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;