import CustomerList from "./components/Customer/CustomerList";
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
            </div>
            <div className="col-10 app-col-height-100">
              <div className="app-col-height-100 col-10 float-end">

                

                <CustomerList />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;