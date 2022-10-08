import { HiMenu } from 'react-icons/hi';
import { useEffect } from 'react';

const Navbar = () => {

  useEffect(() => {
    const handleClick = (e) => {
      const isMenuBtn = e.target.matches('[data-menu-button]');

      if (!isMenuBtn && e.target.closest('[data-menu]') != null) {
        return;
      }

      let mobileDropDown;
      if (isMenuBtn) {
        mobileDropDown = e.target.closest('[data-menu]');
        mobileDropDown.classList.toggle('active');
      }

    };

    document?.addEventListener('click', handleClick);

    return () => {
      document?.removeEventListener('click', handleClick);
    }
  }, [])

  return (
    <nav className="flex justify-between py-5 px-16 bg-neutral-800 text-neutral-300">
      <div className="font-black text-4xl">LOGO</div>
      <div className="nav-items flex text-lg items-end">
        <a href="#" className="mx-5">About</a>
        <a href="#" className="mx-5">Who We Are</a>
        <a href="#" className="mx-5">What We Do</a>
        <a href="#" className="mx-5">Contact</a>
      </div>
      <div className="mobile-nav self-center relative" data-menu>
        <button className="border px-2 py-1 rounded-lg hover:bg-white hover:text-black" data-menu-button>Menu</button>
        <div className="mobile-items flex flex-col text-4xl items-end text-neutral-800 font-semibold cursor-pointer text-center">
          <a href="#" className="py-3 hover:text-neutral-900 hover:bg-slate-200 w-full">About</a>
          <a href="#" className="mx-5 py-3 hover:text-neutral-900 hover:bg-slate-200 w-full">Who We Are</a>
          <a href="#" className="mx-5 py-3 hover:text-neutral-900 hover:bg-slate-200 w-full">What We Do</a>
          <a href="#" className="mx-5 py-3 hover:text-neutral-900 hover:bg-slate-200 w-full">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;