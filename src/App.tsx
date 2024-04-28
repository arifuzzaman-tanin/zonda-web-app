import CustomerList from "./components/Customer/CustomerList";
import ProductList from "./components/Product/ProductList";
import Message from "./Message";

function App() {
  return (
    <div>
      <CustomerList />
      <ProductList />
      <Message/>
    </div>
  );
}

export default App;