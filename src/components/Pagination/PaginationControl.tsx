import '../Pagination/PaginationControl.css';
import Select from 'react-select'

function GetPageSelectBoxOptions() {
    const options = [
        { value: '5', label: '5 items per page' },
        { value: '10', label: '10 items per page' },
        { value: '15', label: '15 items per page' },
        { value: '20', label: '20 items per page' }
    ]

    return (
        <>
            <Select options={options} />
        </>
    );
}


function Pagination() {
    return (
        <>
            <div className='row g-3 pagination-div-bottom'>
                <div className='col-md-3 col-6'>
                    {GetPageSelectBoxOptions()}
                </div>
                <div className='col-md-9 col-6'>
                    <ul className="pagination float-end">
                        <li><button><i className="material-icons">first_page</i></button></li>
                        <li><button className='pagination-button-active'><i className="material-icons">chevron_left</i></button></li>
                        <li><button><i className="material-icons">chevron_right</i></button></li>
                        <li><button><i className="material-icons">last_page</i></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pagination;