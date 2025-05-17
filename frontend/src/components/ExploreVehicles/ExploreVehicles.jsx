import { BsArrowUpRight } from "react-icons/bs";
import VehicleCard from "./VehicleCard";

const vehicles = 

const links = [
    {
        name: "In Stock",
        isActive: true
    },
    {
        name: "New Cars",
        isActive: false
    },
    {
        name: "In Stock",
        isActive: false
    }
]

const handleLink = (e) => {
    e.preventDefault();
    console.log(e.target.href);
}

const ExploreVehicles = () => {
    return (
        <div>
            <div className="px-5 pb-7 flex items-center justify-between">
                <h1 className="text-[2.5rem] font-bold">Explore All Vehicles</h1>
                <a className="flex font-medium" href="">View All <i className="m-0.5 ml-1.5 text-xl"><BsArrowUpRight /></i></a>
            </div>
            <div className="px-3 font-medium text-[15px]">
                <ul className="flex border-b-1 pb-2 border-gray-200 gap-7">
                    <li><a className="active" href="stock" onClick={handleLink}>In Stock</a></li>
                    <li><a href="new" onClick={handleLink}>New Cars</a></li>
                    <li><a href="user" onClick={handleLink}>Used Cars</a></li>
                    {links.map((link, i) => (
                        <li className={link.isActive ? "border-b-2 border-blue-500 pb-2" : ""} key={i}><a>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <VehicleCard />
            </div>
            <div className="h-20"></div>
        </div>
    );
};

export default ExploreVehicles;