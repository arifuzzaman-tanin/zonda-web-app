import http from "../../api/http-common";
import { AxiosResponse } from 'axios';
import IResponse from "../../common/IResponce";

// Fetch all customers for a select box
const CustomersService = {
    getSelectBoxCustomers: async (): Promise<IResponse> => {
        try {
            const response: AxiosResponse<IResponse> = await http.get("/Customers/GetCustomers");
            return response.data;
        } catch (error) {
            console.error("Error fetching select box customers:", error);
            throw new Error("Failed to fetch select box customers.");
        }
    },

    // Fetch a single customer by ID
    getCustomerById: async (id: number): Promise<IResponse | null> => {
        try {
            const response: AxiosResponse<IResponse> = await http.get(`/Customers/GetCustomers/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching customer with ID ${id}:`, error);
            throw new Error(`Failed to fetch customer with ID ${id}.`);
        }
    }
};

export default CustomersService;
