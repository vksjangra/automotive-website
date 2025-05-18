
const VehicleModal = ( { vehicle, onClose } ) => {
    if (!vehicle) return null;
    console.log(vehicle);

    return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="rounded-xl w-[90%] max-w-3xl p-6 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black">
                &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{vehicle.name}</h2>
            <img src="./car-card.png" alt={vehicle.name} className="w-85 rounded-lg mb-4" />
            <p className="text-gray-700">{vehicle.description}</p>
        </div>
    </div>
  );
};

export default VehicleModal