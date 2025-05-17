import { BsArrowUpRight } from "react-icons/bs";

const BrandContainer = () => {
  return (
    <div className="bg-[#F9FBFC] rounded-t-[100px] relative top-[-120px]">
        <div className="h-30"></div>
        <div className="px-5 pb-7 bg-[#F9FBFC] flex items-center justify-between">
            <h1 className="text-[2.5rem] font-bold">Explore Our Premium Brands</h1>
            <a className="flex font-medium" href="">Show All Brands <i className="m-0.5 ml-1.5 text-xl"><BsArrowUpRight /></i></a>
        </div>
        <div className="flex px-4 justify-between">
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b1.jpg.png" alt="blogo" />
            <p className="text-center font-medium">Audi</p>
          </div>
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b2.jpg.png" alt="blogo" />
            <p className="text-center font-medium">BMW</p>
          </div>
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b3.jpg.png" alt="blogo" />
            <p className="text-center font-medium">Ford</p>
          </div>
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b4.jpg.png" alt="blogo" />
            <p className="text-center font-medium">Mercedes Benz</p>
          </div>
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b5.jpg.png" alt="blogo" />
            <p className="text-center font-medium">Peugeot</p>
          </div>
          <div className="p-5 px-10 border-1 border-gray-200 rounded-2xl bg-white hover:cursor-pointer hover:border-blue-600 transition duration-200">
            <img className="p-1" src="./b6.jpg.png" alt="blogo" />
            <p className="text-center font-medium">Volkswagen</p>
          </div>
        </div>
        <div className="h-30"></div>
    </div>
  );
};

export default BrandContainer;