import Pagination from "../Pagination/PaginationControl";
import { useState, useEffect } from "react";
import ProductService from "./ProductService";
import IResponcePaginated from "../../common/IResponcePaginated";

function ProductList(customer: any) {
    const [customerOrders, setCustomerOrders] = useState<IResponcePaginated | null>(null);

    useEffect(() => {
        fetchData();
    }, [customer?.customerId]);

    const fetchData = async () => {
        if (customer?.customerId != null) {
            console.log("Fetching data...");
            try {
                const orders = await ProductService.getCustomersOrdersByCustomerId(customer.customerId.value);
                setCustomerOrders(orders);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        }
    };

    const getMessage = () => {
        let count = customerOrders?.items.length ?? 0;
        return count === 0 ? "No records found" : null;
    };

    const handleButtonClick = async (order: any) => {
        console.log("Deleting order with ID:", order);
        try {
            await ProductService.deleteCustomersOrdersByOrderId(order?.id);
            console.log("Order deleted successfully");
            fetchData(); // Call fetchData again after deleting the order
        } catch (error) {
            console.error("Failed to delete:", error);
        }
    };

    return (
        <>
            <div className="pt-3">
                <div className="row">
                    <div className="col-6">
                        <h2 className="fw-bold mb-0">Products <span className="text-muted fs-5">({customerOrders?.items.length ?? 0})</span></h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body main">
                    <div className="position-absolute top-50 start-50">{getMessage()}</div>

                    <div className="table-responsive">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted cursor-pointer">Product Id <i className="material-icons inline-icon">swap_vert</i></th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Product Name</th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Product Price</th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerOrders?.items.map((order, index) => (
                                    <tr key={index}>
                                        <td className="text-primary">{index + 1}</td>
                                        <td>{order.product.name}</td>
                                        <td>{order.product.price}</td>
                                        <td>
                                            <div className="btn-group dropstart">
                                                <button className="action-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="material-icons">more_horiz</i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-start">
                                                    <li><a className="dropdown-item" href="#" onClick={() => handleButtonClick(order)}>Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5">
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
