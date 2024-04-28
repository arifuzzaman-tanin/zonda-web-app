import '../Pagination/PaginationControl.css';


function Pagination() {
    return (
        <>
            <div className='row'>
                <div className='col-6'>

                </div>
                <div className='col-6'>
                    <ul className="pagination">
                        <li><button><i className="material-icons">first_page</i></button></li>
                        <li><button><i className="material-icons">chevron_left</i></button></li>
                        <li><button><i className="material-icons">chevron_right</i></button></li>
                        <li><button><i className="material-icons">last_page</i></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pagination;