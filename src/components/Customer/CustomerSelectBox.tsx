import { useState, useEffect } from "react";
import Select from 'react-select';
import CustomersService from './CustomerService';
import IResponse from '../../common/IResponce';
import ICustomerSelectBox from './ICustomer';


interface Props {
    onSelectChange: (selectedOption: ICustomerSelectBox | null) => void;
}

function CustomerSelectBox({ onSelectChange }: Props) {

    const [selectBoxCustomers, setSelectBoxCustomers] = useState<ICustomerSelectBox[]>([]);
    const [selectedOption, setSelectedOption] = useState<any>(null);

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

    const handleSelectChange = (selectedOption: ICustomerSelectBox) => {
        setSelectedOption(selectedOption);
        onSelectChange(selectedOption); // Call the onSelect callback with selected option
    };

    return (
        <>
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
            />
        </>
    );
}

export default CustomerSelectBox;
