import http from "../../api/http-common";
import { AxiosResponse } from 'axios';
import IResponcePaginated from "../../common/IResponcePaginated";


const ProductService = {
    getCustomersOrdersByCustomerId: async (customerId: any): Promise<IResponcePaginated | null> => {
        try {
            const response: AxiosResponse<IResponcePaginated> = await http.get(`/CustomerOrders/GetCustomerOrder?CustomerId=${customerId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with customerId ${customerId}:`, error);
            throw new Error(`Failed to fetch customer with customerId ${customerId}.`);
        }
    },
}

export default ProductService;