import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}:${import.meta.env.VITE_BACKEND_PORT}`;

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