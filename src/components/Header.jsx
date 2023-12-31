import React, { useContext, useEffect, useState } from 'react';
//
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
//icons
import { BsBag } from 'react-icons/bs';
import Logo from '../img/logo.svg';


const Header = () => {
  //headerstate
 const [isActive, setIsActive] = useState(true);
 const {isOpen, setIsOpen} = useContext(SidebarContext);
 const {itemAmount} = useContext(CartContext);
 //event listener
 useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive (true) : setIsActive (false);
  });
 });

  return (
  <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
  fixed w-full z-10 transition-all`} >
    <div className='container mx-auto flex items-center
    justify-between h-full'>
    {/* logo */}
    <Link to={'/'}>
      <img className='w-[40px]' src={Logo} alt = ''/>
    </Link>
    {/* nav bar option */}
    <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0'>
    <Link className='font-semibold' to={'/Men'}>Men</Link>
    <Link className='font-semibold' to = {'/Women'}>Women</Link>
    </div>
    {/* cart */}
    <div onClick={()=> setIsOpen(!isOpen)}
    className='cursor-pointer flex relative'
    >
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 
      text-[12px] w-[18px] h-[18px] text-white rounded-full flex
      justify-center items-center'
      >
      {itemAmount}
      </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
