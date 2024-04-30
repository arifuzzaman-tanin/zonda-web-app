interface ICustomer {
    id: any,
    name: string;
    contact: string;
    address: string;
}

interface IProduct {
    id: any,
    name: string;
    code: number;
    price: number;
}

interface ICustomerOrder {
    id: any,
    customerId: string;
    customer: ICustomer;
    productId: string;
    product: IProduct;
}

export default ICustomerOrder;