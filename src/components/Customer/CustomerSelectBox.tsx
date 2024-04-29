import Select from 'react-select'
import { useState, useEffect } from "react";
import CustomersService from './CustomerService';
import IResponse from '../../common/IResponce';
import ICustomerSelectBox from './ICustomer';


function CustomerSelectBox() {

    const [selectBoxCustomers, setSelectBoxCustomers] = useState<ICustomerSelectBox[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customers: IResponse = await CustomersService.getSelectBoxCustomers();
                setSelectBoxCustomers(customers.data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchData();
    }, []);

    const options = selectBoxCustomers.map(customer => ({
        value: customer.id,
        label: customer.name
    }));


    return (
        <>
            <Select defaultValue={options[0]} options={options} />
        </>
    );
}


export default CustomerSelectBox;