import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";
import { PiCarProfileBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa";
import { TbCarFilled } from "react-icons/tb";
import AuthenticationModal from "../Authentication/AuthenticationModal";
import { useState } from "react";
import ListingModal from "../CreateListing/ListingModal";

const Navbar = () => {

  let user = sessionStorage.getItem("User");

  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);
  const [listingModalIsOpen, setlistingModalIsOpen] = useState(false);

  function openAuthModal() {
    setAuthModalIsOpen(true);
  };

  function openListingModal() {
    setlistingModalIsOpen(true);
  };

  function closeAuthModal() {
    setAuthModalIsOpen(false);
  };

  function closeListingModal() {
    setlistingModalIsOpen(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    openAuthModal();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("User");
    window.location.reload();
  };

  const handleListing = (e) => {
    if (user) {
      openListingModal();
    } else {
      openAuthModal();
    };
  };

  return (
    <div className="bg-[url(./Background.jpg)] font-display">
      <div className="flex h-26 justify-between items-center">
        <div className="ml-15">
          <img src="./Logo.png" alt="Logo" className="" />
        </div>
        <div className="flex gap-7 items-center text-nowrap">
          <ul className="flex gap-6 text-white font-medium">
            <li className="flex">Home<i className="m-1"><IoMdArrowDropdown /></i></li>
            <li className="flex">Listings<i className="m-1"><IoMdArrowDropdown /></i></li>
            <li className="flex">Blog<i className="m-1"><IoMdArrowDropdown /></i></li>
            <li className="flex">Pages<i className="m-1"><IoMdArrowDropdown /></i></li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {user ? 

            <a onClick={handleSignOut} className="text-white flex cursor-pointer"><i className="p-0.5 pr-2"><FaRegUser /></i>Sign Out</a>
            :
            <a onClick={handleSignIn} className="text-white flex cursor-pointer"><i className="p-0.5 pr-2"><FaRegUser /></i>Sign In</a>
          }

          
          
          <button onClick={handleListing} className="bg-white rounded-full px-6 py-3 font-medium mr-14">Submit Listing</button>
        </div>
      </div>
      <div>
        <p className="text-center mt-39 text-white">Find cars for sale and for rent near you</p>
      </div>
      <div>
        <h1 className="text-center mt-8 text-7xl font-bold text-white">Find Your Perfect Car</h1>
      </div>
      <div>
        <ul className="text-white flex justify-center gap-8 mb-5 pb-2 mt-9 font-medium">
          <li>
            <label className="cursor-pointer capitalize checked:border-b-2">
              <input type="radio" name="mode" value="all" className="hidden peer" defaultChecked />
              <span className="peer-checked:border-b-2 pb-2 border-white transition-all duration-300">
                All
              </span>
            </label>
          </li>
          <li>
            <label className="cursor-pointer capitalize peer-checked:border-b-2 ">
              <input type="radio" name="mode" value="new" className="hidden peer" />
              <span className="peer-checked:border-b-2 pb-2 border-white transition-all duration-300">
                New
              </span>
            </label>
          </li>
          <li>
            <label className="cursor-pointer capitalize  peer-checked:border-b-2">
              <input type="radio" name="mode" value="used" className="hidden peer" />
              <span className="peer-checked:border-b-2 pb-2 border-white transition-all duration-300">
                Used
              </span>
            </label>
          </li>
        </ul>
      </div>


      <div className="flex justify-center">
        <form className="flex rounded-full bg-white justify-center items-center w-fit pl-10 py-2 mb-15">
          <button className="mx-5">
            <select className="pr-10">
              <option value="">Any Makes</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </button>
          <div className="border-l border-gray-300 h-10 mx-4"></div>
          <button className="mx-5">
            <select className="pr-10">
              <option value="">Any Models</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </button>
          <div className="border-l border-gray-300 h-10 mx-4"></div>
          <button className="mx-5">
            <select className="appearance-none mr-9">
              <option value="">Prices: All Prices</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </button>
          <button className="bg-[#405ff2] flex items-center mx-2 text-white rounded-full px-12 py-4 font-medium hover:bg-[#507fff] transition delay-150 duration-300"><i className="mr-2 text-bold"><IoSearchSharp /></i>Search Cars</button>

        </form>
      </div>

      <p className="text-center text-white">Or Browse Featured Model</p>

      <div className="text-white flex justify-center bg-opacity-5 gap-2.5 mt-7 pb-70">
        <button className="flex items-center bg-[#FFFFFF2E] hover:bg-[#FFFFFF4E] transition delay-150 duration-300 px-8 py-0.5 rounded-full"><i className="text-2xl m-2"><TbCarSuv /></i>suv</button>
        <button className="flex items-center bg-[#FFFFFF2E] hover:bg-[#FFFFFF4E] transition delay-150 duration-300 px-8 py-0.5 rounded-full"><i className="text-2xl m-2"><PiCarProfileBold /></i>Sedan</button>
        <button className="flex items-center bg-[#FFFFFF2E] hover:bg-[#FFFFFF4E] transition delay-150 duration-300 px-8 py-0.5 rounded-full"><i className="text-2xl m-2"><FaCarSide /></i>Hatchback</button>
        <button className="flex items-center bg-[#FFFFFF2E] hover:bg-[#FFFFFF4E] transition delay-150 duration-300 px-8 py-0.5 rounded-full"><i className="text-2xl m-2"><FaTruckPickup /></i>Coupe</button>
        <button className="flex items-center bg-[#FFFFFF2E] hover:bg-[#FFFFFF4E] transition delay-150 duration-300 px-8 py-0.5 rounded-full"><i className="text-2xl m-2"><TbCarFilled /></i>Hybrid</button>
      </div>
      <AuthenticationModal authModalIsOpen={authModalIsOpen} closeAuthModal={closeAuthModal}/>
      <ListingModal listingModalIsOpen={listingModalIsOpen} closeListingModal={closeListingModal} />
    </div>

  );
};

export default Navbar;