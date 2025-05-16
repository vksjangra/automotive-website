import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-[url(./Background.jpg)] bg-size-full font-display">
      <div className="flex justify-between h-26 items-center">
        <div className="pl-16">
          <img src="./Logo.png" alt="Logo" />
        </div>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4 text-white font-medium">
            <li>Home<IoMdArrowDropdown/> </li>
            <li>Listings</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <a href="#" className="flaticon-user pre">Sign In</a>
          <button className="bg-white rounded-lg px-3 py-2">Submit Listing</button>
        </div>
      </div>
      <div>
        <p className="text-center mt-5">Find cars for sale and for rent near you</p>
      </div>
      <div>
        <h1 className="text-center mt-3 text-4xl">Find Your Perfect Car</h1>
      </div>
    </div>
  );
};

export default Navbar;