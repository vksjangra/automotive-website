import { useState } from "react";

const CreateListing = () => {
    
    const [listing, setListing] = useState({
        name: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // createListing(listing);
    };

    const handleChange = (e) => {
        setListing({...listing, [e.target.name]: e.target.value});
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Vehicle Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" name="brand"/>
            <input type="number" name="model"/>
            <textarea name="description"/>
            <input type="text" name="details"/>
            <input type="text" name="mileage"/>
            <input type="text" name="fuel"/>
            <input type="text" name="transmission"/>
            <button type="submit">Submit</button>
        </form>

        <form onSubmit={handleSubmit} className="max-w-md mt-10 mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input value={listing.name} onChange={handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vehicle Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={listing.model} onChange={handleChange} type="number" name="model" id="model" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="model" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vehicle Model</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={listing.brand} onChange={handleChange} type="text" name="brand" id="brand" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="brand" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
               
                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Listing</button>
            </form>
    </div>
  );
};

export default CreateListing;