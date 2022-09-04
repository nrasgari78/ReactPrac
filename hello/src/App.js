import logo from './logo.svg';
import './App.css';
import Product from "./Component/Product/Product";
import ProductClassBase from "./Component/ProductClassBase/ProductClassBase";
import ProductsList from "./Component/ProductsList/ProductsList";
import Navbar from "./Component/Navigation/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar>
        </Navbar>
        <ProductsList></ProductsList>
    </div>
  );
}

export default App;
