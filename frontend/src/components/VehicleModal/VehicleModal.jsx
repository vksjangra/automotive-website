import Modal from "react-modal";
import { useState } from "react";
import { createInquiry } from "../../api";

function formatDollarWithCommas(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

Modal.setAppElement("#root");

const VehicleModal = ({ vehicle, vehicleModalIsOpen, closeVehicleModal }) => {
    if (!vehicle) return null;

    const [form, setForm] = useState({ name: "", email: "", message: "", vehicle: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        const submission = { ...form, vehicle: vehicle._id };
        console.log(submission);
        createInquiry(submission);
        setForm({ name: "", email: "", message: "", vehicle: "" });
    };

    return (
        <Modal
            isOpen={vehicleModalIsOpen}
            onRequestClose={closeVehicleModal}
            contentLabel="Vehicle Modal"
            className="max-w-6xl mx-auto my-10 bg-white rounded-lg shadow-xl p-8 outline-none flex flex-col gap-6"
            overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
        >
            <button
                className="py-1 px-3 absolute top-4 right-4 border border-gray-300 rounded-full hover:border-blue-500"
                onClick={closeVehicleModal}
            >
                X
            </button>
            <div className="flex flex-col md:flex-row gap-10">
                {/* Vehicle Info */}
                <div className="w-full md:w-1/2 border border-gray-200 rounded-xl p-4">
                    <img className="rounded-xl max-h-60 w-full object-cover mb-4" src={vehicle.image} alt="car" />
                    <h2 className="text-2xl font-semibold mb-2">{vehicle.name} - {vehicle.model}</h2>
                    <p className="text-sm text-gray-600 mb-2">
                        {vehicle.description}
                    </p>
                    <div className="flex justify-between text-sm mb-4">
                        <div className="flex flex-col items-center">
                            <img src="MileageIcon.svg" alt="Mileage" />
                            <p>{vehicle.mileage} miles</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="FuelIcon.svg" alt="Fuel" />
                            <p>{vehicle.fuel}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="TransmissionIcon.svg" alt="Transmission" />
                            <p>{vehicle.transmission}</p>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-blue-600">{formatDollarWithCommas(vehicle.price)}</p>
                </div>

                {/* Inquiry Form */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <h3 className="text-xl font-semibold">Inquiry Form</h3>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border p-2 rounded-md"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="border p-2 rounded-md"
                            rows={3}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default VehicleModal;
