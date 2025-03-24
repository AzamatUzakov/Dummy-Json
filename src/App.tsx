import "./App.css";
import ProductDetails from "./components/custom/ProductDetails";
import ProductList from "./components/custom/ProductList";
import Search from "./components/custom/Search";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Search />
      <ProductList />
      <ProductDetails />
    </ProductProvider>
  );
}

export default App;
