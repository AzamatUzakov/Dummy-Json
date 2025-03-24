import "./App.css";
import ProductList from "./components/custom/ProductList";
import Search from "./components/custom/Search";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Search />
      <ProductList />
    </ProductProvider>
  );
}

export default App;
