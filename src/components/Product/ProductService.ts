import http from "../../api/http-common";
import { AxiosResponse } from 'axios';
import IResponcePaginated from "../../common/IResponcePaginated";
import IResponse from "../../common/IResponce";


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
    deleteCustomersOrdersByOrderId: async (id: any): Promise<IResponse | null> => {
        try {
            const response: AxiosResponse<IResponse> = await http.delete(`/CustomerOrders/Delete?Id=${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with id ${id}:`, error);
            throw new Error(`Failed to fetch product with id ${id}.`);
        }
    },
}

export default ProductService;