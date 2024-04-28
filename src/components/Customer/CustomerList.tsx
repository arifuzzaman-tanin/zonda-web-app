import Pagination from "../Pagination/PaginationControl";

function CustomerList() {
    const customers: any[] = [
        {
            id: 1,
            name: "Md. Arifuzzaman Tanin",
            contact: "437-460-XXXX"
        },
        {
            id: 2,
            name: "Shanta Akther Saniya",
            contact: "437-460-XXXX"
        },
        {
            id: 3,
            name: "Shanta Akther Saniya",
            contact: "437-460-XXXX"
        }
    ];

    const getMessage = () => {
        return customers.length === 0 ? "No records found" : null;
    };

    return (
        <>
            <div className="pt-3">
                <div className="row">
                    <div className="col-6">
                        <h2 className="fw-bold mb-0">Customers <span className="text-muted fs-5">({customers.length})</span></h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="btn btn-primary">Add Customer</button>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body main">
                    <div className="position-absolute top-50 start-50">{getMessage()}</div>

                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="bg-off-whight border-0">CustomerId</th>
                                    <th className="bg-off-whight border-0">Name</th>
                                    <th className="bg-off-whight border-0">Contact</th>
                                    <th className="bg-off-whight border-0">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={customer.id}>
                                        <td className="text-primary">{index+1}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.contact}</td>
                                        <td>...</td>
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

export default CustomerList;