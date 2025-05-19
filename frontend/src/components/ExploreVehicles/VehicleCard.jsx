import { BsArrowUpRight } from "react-icons/bs";

function formatDollarWithCommas(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

const VehicleCard = ( { vehicle } ) => {


  return (
    <div className="inline-block rounded-xl border-1 border-gray-200 w-82 mx-4 hover:shadow-xl transition-shadow duration-300">
      <img className="rounded-t-xl h-55 max-h-55 w-full object-cover" src={vehicle.image} alt="car" />
      <h2 className="font-medium mx-8 mt-4">{vehicle.name} - {vehicle.model}</h2>
      <p className="truncate text-sm mx-8 pb-2 border-b-1 border-gray-200">{vehicle.description}</p>
      <div className="flex justify-between mx-8 mt-3 text-sm border-b-1 border-gray-200 mb-3 pb-3">
        <div className="flex flex-col items-center">
          <img src="MileageIcon.svg" alt="Icon" />
          <p>{vehicle.mileage} miles</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="FuelIcon.svg" alt="Icon" />
          <p>{vehicle.fuel}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="TransmissionIcon.svg" alt="Icon" />
          <p>{vehicle.transmission}</p>
        </div>
      </div>
      <div className="flex justify-between mx-8 mb-5 items-center">
        <p className="text-xl font-bold">{formatDollarWithCommas(vehicle.price)}</p>
        <p className="text-sm text-blue-500"><a className="flex font-medium" href="" onClick={(e) => {e.preventDefault()}}>View Details <i className="ml-1.5"><BsArrowUpRight size={22}/></i></a></p>
      </div>
    </div>
  );
};

export default VehicleCard;