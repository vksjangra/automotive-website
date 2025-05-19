import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}:${import.meta.env.VITE_BACKEND_PORT}`;

export async function getVehicles() {
    const response = await axios.get(`${BASE_URL}/vehicles`);
    if (response.status === 200) {
        return response;
    } else {
        return;
    };
};


export async function getVehicle(id) {
    const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
    if (response.status === 200) {
        return response;
    } else {
        return;
    };
};


export async function createVehicle(vehicle) {
    const response = await axios.post(`${BASE_URL}/vehicles`, vehicle);
    console.log(response);
    return response;
};

export async function updateVehicle(id, vehicle) {
    const response = await axios.post(`${BASE_URL}/vehicles/${id}`, vehicle);
    return response;
}

export async function deleteVehicle(id) {
    const response = await axios.delete(`${BASE_URL}/vehicles/${id}`);
    return;
};


export async function createUser(user) {
    const response = await axios.post(`${BASE_URL}/users`, user);
    console.log(response);
    if (response?.data?.message?.includes("not available")) {
        alert("Email already taken and is not avialable");
    } else {
        return response;
    };
};

export async function updateUser(id, user) {
    const response = await axios.put(`${BASE_URL}/users/${id}`, user);
    return response;
};

export async function getUser(id) {
    const response = await axios.get(`${BASE_URL}/users/${id}`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    };
};


export async function verifyUser(user) {
    const response = await axios.post(`${BASE_URL}/users/login`, user);
    if (response.data.success) {
        return response.data.token;
    } else {
        alert("Login failed");
        throw new Error(response.statusText);
    };
};


export async function createInquiry(inquiry) {
    const response = await axios.post(`${BASE_URL}/inquiries`, inquiry);
    console.log(response);
    return response;
};


export async function getInquiries() {
    const response = await axios.get(`${BASE_URL}/inquiries`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    };
};


export async function getInquiry(id) {
    const response = await axios.get(`${BASE_URL}/inquiries/${id}`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    };
};