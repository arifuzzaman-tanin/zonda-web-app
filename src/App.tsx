import ProductList from "./components/Product/ProductList";
import CustomerList from "./components/Customer/CustomerList";
import CustomerSelectBox from "./components/Customer/CustomerSelectBox";
import { useState } from 'react';
import ICustomerSelectBox from "./components/Customer/ICustomer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('product');

  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);

  const handleSelectChange = (selectedOption: any | null) => {
    setSelectedCustomer(selectedOption);
  };

  // Function to handle menu item click
  const handleMenuItemClick = (menuItem: any) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <>
      <Router>
        <div className="bg-off-whight">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 app-col-height-100 bg-white pt-2">
                <CustomerSelectBox onSelectChange={handleSelectChange} />

                <div className="navigation-control">
                  <ul>
                    <li className={activeMenuItem === 'customer' ? 'cursor-pointer rounded-1 active' : 'cursor-pointer rounded-1'}>
                      <Link to="/customer" onClick={() => handleMenuItemClick('customer')}>Customer Info</Link>
                    </li>
                    <li className={activeMenuItem === 'product' ? 'cursor-pointer rounded-1 active' : 'cursor-pointer rounded-1'}>
                      <Link to="/" onClick={() => handleMenuItemClick('product')}>Product Details</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-10 app-col-height-100">
                <div className="app-col-height-100 col-10 float-end">
                  <Routes>
                    <Route
                      path="/customer"
                      element={<CustomerList />}
                    ></Route>
                    <Route
                      path="/"
                      element={<ProductList customerId={selectedCustomer} />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;