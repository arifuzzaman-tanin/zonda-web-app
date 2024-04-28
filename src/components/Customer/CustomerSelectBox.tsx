import Select from 'react-select'

function CustomerSelectBox() {

    const options = [
        {
            value: 0,
            label: "Md. Arifuzzaman Tanin"
        },
        {
            value: 1,
            label: "Shanta Akther Saniya"
        }
    ]

    return (
        <>
            <Select defaultValue={options[0]} options={options} />
        </>
    );
}


export default CustomerSelectBox;