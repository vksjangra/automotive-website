import { BsArrowUpRight } from "react-icons/bs";
import VehicleCard from "./VehicleCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VehicleModal from "../VehicleModal/VehicleModal";

const BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}:${import.meta.env.VITE_BACKEND_PORT}`;



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

    const [vehicleModalIsOpen, setVehicleModalIsOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    function openVehicleModal(vehicle) {
        setSelectedVehicle(vehicle);
        setVehicleModalIsOpen(true);
    };

    function closeVehicleModal() {
        setSelectedVehicle(null);
        setVehicleModalIsOpen(false);
    };

    const [data, setData] = useState();


    useEffect(() => {
        const grabData = async () => {
            console.log(BASE_URL + "/vehicles");
            const response = await axios.get(BASE_URL + "/vehicles");
            console.log(response);
            if (response.status === 200) {
                setData(response.data);
            }
        };

        grabData();

    }, []);

    const scrollRef = useRef();

        const scroll = direction => {
            const { current } = scrollRef;

            if (direction === "left") {
                current.scrollBy({ left: -300, behaviour: "smooth" });
            } else {
                current.scrollBy({ left: 300, behaviour: "smooth" });
            };
        };

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
            <div ref={scrollRef} className="mt-10 flex overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar">
                {data && data.map((vehicle, i) => (
                    <div key={i} onClick={() => openVehicleModal(vehicle)}>
                        <VehicleCard vehicle={vehicle}/>    
                    </div>
                ))}
            </div>
            <div className="m-4 mt-8">
                <button className="border border-gray-200 p-2 px-3 rounded-full cursor-pointer mr-2 hover:border-blue-500 transition duration-100" onClick={() => scroll("left")}><FaChevronLeft size={18}/></button>
                <button className="border border-gray-200 p-2 px-3 rounded-full cursor-pointer hover:border-blue-500 transition duration-100" onClick={() => scroll("right")}><FaChevronRight size={18}/></button>
            </div>
            <VehicleModal vehicle={selectedVehicle} vehicleModalIsOpen={vehicleModalIsOpen} closeVehicleModal={closeVehicleModal} />
            <div className="h-20"></div>
        </div>
    );
};

export default ExploreVehicles;

