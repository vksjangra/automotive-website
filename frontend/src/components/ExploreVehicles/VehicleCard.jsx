import { BsArrowUpRight } from "react-icons/bs";

const VehicleCard = ( { vehicle } ) => {
  return (
    <div className="inline-block rounded-xl border-1 border-gray-200 w-82 mx-4 hover:shadow-xl transition-shadow duration-300">
      <img className="rounded-t-xl w-full object-cover" src="./car-card.png" alt="car" />
      <h2 className="font-medium mx-8 mt-4">{vehicle.name} - {vehicle.model}</h2>
      <p className="truncate text-sm mx-8 pb-2 border-b-1 border-gray-200">4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate</p>
      <div className="flex justify-between mx-8 mt-3 text-sm border-b-1 border-gray-200 mb-3 pb-3">
        <div className="flex flex-col items-center">
          <img src="MileageIcon.svg" alt="Icon" />
          <p>2500 miles</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="FuelIcon.svg" alt="Icon" />
          <p>Diesel</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="TransmissionIcon.svg" alt="Icon" />
          <p>Manual</p>
        </div>
      </div>
      <div className="flex justify-between mx-8 mb-5 items-center">
        <p className="text-xl font-bold">$58,000</p>
        <p className="text-sm text-blue-500"><a className="flex font-medium" href="" onClick={(e) => {e.preventDefault()}}>View Details <i className="ml-1.5"><BsArrowUpRight size={22}/></i></a></p>
      </div>
      <div className="border-b-1 border-gray-200"></div>
    </div>
  );
};

export default VehicleCard;