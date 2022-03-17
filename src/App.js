import "./App.css";
import { Navbar } from "./Components/Navbar";
import { CartManagement } from "./pages/CartManagement";
import { ProductListing } from "./pages/ProductListing";

function App() {
  return (
    <div className="App">
      <header>
       <Navbar/>
      </header>
      <ProductListing/>
      <CartManagement/>
    </div>
  );
}

export default App;
