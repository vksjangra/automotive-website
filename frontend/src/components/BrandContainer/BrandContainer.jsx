import { BsArrowUpRight } from "react-icons/bs";

const BrandContainer = () => {
  return (
    <div className="bg-[#F9FBFC] rounded-[100px] relative top-[-120px]">
        <div className="h-30"></div>
        <div className="px-5 pb-40 bg-[#F9FBFC] flex items-center justify-between">
            <h1 className="text-[2.5rem] font-bold">Explore Our Premium Brands</h1>
            <a className="flex font-medium" href="">Show All Brands <i className="m-0.5 ml-1.5 text-xl"><BsArrowUpRight /></i></a>
        </div>
    </div>
  );
};

export default BrandContainer;