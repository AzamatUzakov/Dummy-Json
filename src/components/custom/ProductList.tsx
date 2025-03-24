import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import ProductDetails from "./ProductDetails";
import { Skeleton } from "../ui/skeleton";


const ProductList = () => {
    const context = useContext(ProductContext);
    const [modal, setModal] = useState(false)

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }

    const { products, setProducts, setSelectedProduct, filtered, setFiltered } = context;

    const fetchData = () => {

        fetch(import.meta.env.VITE_PUBLICK_API)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products)
                setFiltered(data.products)
            })
            .catch((e) => console.error("Error:", e));
    }
    useEffect(() => {
        fetchData()
    }, []);

    console.log(filtered);

    return (
        <div className="relative">
            <Button className="absolute top-0 right-5" onClick={() => fetchData()}>Reload</Button>
            <h1 className="text-2xl font-bold my-4">Список товаров:</h1>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filtered.length > 0 ?(
                    filtered.map((item) => (
                        <Card key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                            onClick={() => { setSelectedProduct(item), setModal(true) }}
                        >
                            <CardHeader className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                                <CardTitle className="text-2xl font-semibold mb-2">{item.title}</CardTitle>
                                <CardDescription className="text-sm text-white  opacity-80">{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-7">
                                <img src={item.images?.[0]} alt="images" className="h-[200px] w-full object-cover rounded-lg mb-4" />
                            </CardContent>
                            <Button className="w-[80%] mx-auto cursor-pointer my-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md transition duration-300"
                                onClick={() => { setSelectedProduct(item), setModal(true) }}
                            >
                                BUY {item.price} $
                            </Button>
                        </Card>
                    ))
                ) : <Skeleton className="w-[100px] h-[20px] rounded-full" />
}
                {modal && <ProductDetails setModal={setModal} />}
            </main>
        </div>
    );
};

export default ProductList;
