import Pagination from "../Pagination/PaginationControl";

function CustomerList() {
    const customers: any[] = [
        {
            id: 0,
            name: "Md. Arifuzzaman Tanin"
        },
        {
            id: 1,
            name: "Shanta Akther Saniya"
        }
    ];

    const getMessage = (message?: string) => {
        return message?.trim().length != 0 ? message : "No records found";
    };

    return (
        <>
            <h4>List of customers</h4>
            {getMessage("")}
            <ul>
                {customers.map((customer) => (
                    <li
                        key={customer.id}
                        onClick={() => { console.log(customer.id) }}
                    >
                        {customer.name}</li>
                ))}
            </ul>

            <div className="mt-5">
                    <Pagination/>
            </div>
        </>
    );
}

export default CustomerList;