import ProductList from "./components/Product/ProductList";
import CustomerSelectBox from "./components/Customer/CustomerSelectBox";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-off-whight">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 app-col-height-100 bg-white pt-2">
              <CustomerSelectBox />

              <ul className="list-group mt-3">
                <li className="list-group-item border-0 rounded-1 cursor-pointer">Customer Info</li>
                <li className="list-group-item border-0 rounded-1 cursor-pointer active">Product Details</li>
              </ul>
            </div>
            <div className="col-10 app-col-height-100">
              <div className="app-col-height-100 col-10 float-end">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;