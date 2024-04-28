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
              
              <div className="navigation-control">
                <ul>
                  <li className="cursor-pointer rounded-1">Customer Info</li>
                  <li className="cursor-pointer rounded-1 active">Product Details</li>
                </ul>
              </div>
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