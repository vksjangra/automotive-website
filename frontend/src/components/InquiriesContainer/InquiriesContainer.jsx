// import { useEffect, useState } from "react";
// import * as jwt_decode from "jwt-decode";
// import { getVehicles } from "../../api";

// const InquiriesContainer = () => {

//     const [vehicles, setVehicles] = useState([]);
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         const loadUserData = async () => {
//             const token = sessionStorage.getItem("User");
//             const decodedUser = jwt_decode.jwtDecode(token);
//             const {data: allVehicles} = await getVehicles();
//             const filteredVehicles = allVehicles.filter(vehicle => vehicle.seller === decodedUser._id);
//             setVehicles(filteredVehicles);
//             setUser(decodedUser);
//         };

//         loadUserData();

//     }, []);

//   return (
//     <div>{vehicles && vehicles.map(e=>(<div key={e._id}>{e.name}</div>))}</div>
//   );
// };

// export default InquiriesContainer;











import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getVehicles, getInquiries } from "../../api";

const InquiriesContainer = () => {
    const [vehicleInquiries, setVehicleInquiries] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const token = sessionStorage.getItem("User");
            if (!token) return;
            
            const user = jwtDecode(token);
            const { data: allVehicles } = await getVehicles();
            const allInquiries = await getInquiries();

            console.log(allInquiries);

            const userVehicles = allVehicles.filter(v => v.seller === user._id);

            console.log(userVehicles);

            const vehiclesWithInquiries = userVehicles
                .map(vehicle => {
                    const inquiries = allInquiries.filter(inq => inq.vehicle === vehicle._id);
                    return inquiries.length ? { vehicle, inquiries } : null;
                })
                .filter(Boolean); // removes nulls

            setVehicleInquiries(vehiclesWithInquiries);
        };

        loadData();
    }, []);

    return (
        <div className="h-[80vh] overflow-y-auto flex flex-col gap-6 px-6 py-4">
            {!vehicleInquiries.length > 0 ? (<div className="text-black mt-10 mx-auto text-3xl font-bold">No Inquiries</div>) : vehicleInquiries.map(({ vehicle, inquiries }) => (
                <div key={vehicle._id} className="flex gap-6 border rounded-lg shadow-sm mt-4 p-4">
                    {/* Vehicle info on the left */}
                    <div className="w-1/3 border-r pr-4">
                        <h2 className="text-lg font-semibold">{vehicle.name}</h2>
                        <p className="text-gray-600">{vehicle.model}</p>
                        <p className="text-sm text-gray-500">Price: ₹{vehicle.price}</p>
                        <img src={vehicle.image} alt="" />
                    </div>

                    {/* Inquiries on the right */}
                    <div className="w-2/3 pl-4">
                        <h3 className="text-md font-medium mb-2">Inquiries:</h3>
                        <ul className="space-y-2">
                            {inquiries.map(inq => (
                                <li key={inq._id} className="bg-gray-100 rounded p-2">
                                    <p><strong>Name:</strong> {inq.name}</p>
                                    <p><strong>Email:</strong> {inq.email}</p>
                                    <p><strong>Message:</strong> {inq.message}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InquiriesContainer;
