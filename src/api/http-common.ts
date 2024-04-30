import axios, { AxiosInstance } from "axios";

// Define a type for Axios configuration
interface AxiosConfig {
    baseURL: string;
    headers?: Record<string, string>;
}

// Function to create an Axios instance with custom configuration
const createAxiosInstance = (config: AxiosConfig): AxiosInstance => {
    return axios.create(config);
};

// Default configuration
const defaultConfig: AxiosConfig = {
    baseURL: "http://localhost:5109/api",
    headers: {
        "Content-Type": "application/json"
    }
};

// Create and export the Axios instance with default configuration
const axiosInstance: AxiosInstance = createAxiosInstance(defaultConfig);
export default axiosInstance;
