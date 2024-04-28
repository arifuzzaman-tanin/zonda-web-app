import Pagination from "../Pagination/PaginationControl";


function ProductList() {
    const products: any[] = [
        {
            id: 1,
            name: "CPU",
            price: 500
        },
        {
            id: 2,
            name: "Monitor",
            price: 130
        },
        {
            id: 3,
            name: "RAM",
            price: 200
        },
        {
            id: 4,
            name: "Keyboard",
            price: 50
        },
        {
            id: 5,
            name: "Mouse",
            price: 30
        }
    ];

    const getMessage = () => {
        return products.length === 0 ? "No records found" : null;
    };

    return (
        <>
            <div className="pt-3">
                <div className="row">
                    <div className="col-6">
                        <h2 className="fw-bold mb-0">Products <span className="text-muted fs-5">({products.length})</span></h2>
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
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Product Id <i className="material-icons inline-icon">swap_vert</i></th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Product Name</th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Product Price</th>
                                    <th className="bg-off-whight border-0 text-uppercase text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="text-primary">{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                        <div className="btn-group dropstart">
                                                <button className="action-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="material-icons">more_horiz</i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-start">
                                                    <li><a className="dropdown-item" href="#">Delete</a></li>
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