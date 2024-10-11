import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo2.png";
import { Link } from "react-scroll";
import Pic from '../assets/pic.jpg'

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#141619] text-gray-300">
      <div>
        <img src={Pic} alt="my logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="main" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <ul>
          <li className="py-6 text-4xl"> <Link  onClick={handleClick} to="main" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className="py-6 text-4xl"> <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
          <li className="py-6 text-4xl"> <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
          <li className="py-6 text-4xl"> <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link></li>
          <li className="py-6 text-4xl"> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>
      </div>

      {/* Socials */}
      <div className="flex fixed flex-col top-[35%] left-0 hidden lg:flex">
        <ul>
          <li className="w-[160px] h-[60px] justify-between  flex items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-blue-600">
            <a
              href="https://www.LinkedIn.com/in/kwa1234"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]  justify-between  flex items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-[#000]">
            <a
              href="https://github.com/addo12kwame"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between  flex items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-[#bd4848]">
            <a
              href="mailto:addo12kwame@outlook.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between  flex items-center text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-[#813131]">
            <a
              href="https://kwamesbucket.s3.amazonaws.com/KwameGradds.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
