import { useContext, useEffect } from "react";
import { ProductContext } from "@/context/ProductContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";


const ProductList = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }

    const { products, setProducts, setSelectedProduct } = context;

    useEffect(() => {
        fetch(import.meta.env.VITE_PUBLICK_API)
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((e) => console.error("Error:", e));
    }, []);

    console.log(products);

    return (
        <div>
            <h1 className="text-2xl font-bold my-4">Список товаров:</h1>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {products.map((item) => (
                    <Card key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
                        <CardHeader className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                            <CardTitle className="text-2xl font-semibold mb-2">{item.title}</CardTitle>
                            <CardDescription className="text-sm text-white  opacity-80">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                            <img src={item.images?.[0]} alt="images" className="h-[200px] w-full object-cover rounded-lg mb-4" />
                        </CardContent>
                        <Button className="w-[80%] mx-auto cursor-pointer my-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md transition duration-300"
                        onClick={()=>setSelectedProduct(item)}
                        >
                            BUY {item.price} $   
                        </Button>
                    </Card>
                ))}
            </main>
        </div>
    );
};

export default ProductList;
