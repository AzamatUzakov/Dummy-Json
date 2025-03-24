import { useContext, useEffect } from "react";
import { ProductContext } from "@/context/ProductContext";

const ProductList = () => {
    const context = useContext(ProductContext);


    const { products, setProducts } = context;

    useEffect(() => {
        fetch(import.meta.env.VITE_PUBLICK_API)
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((e) => console.error("Error:", e));
    }, []);

    console.log(products);

    return (
        <div>
            <h1>Список продуктов:</h1>
            {products.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
