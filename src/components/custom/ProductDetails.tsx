import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import {
    Card
} from "@/components/ui/card"

interface ProductDetailsProps {

    setModal: (value: boolean) => void
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ setModal }) => {

console.log(setModal);

    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }

    const { selectedProduct } = context;

    console.log();

    return (
        <>
            <div className="">
                <div className="fixed h-screen w-full bg-gradient-to-t from-white to-transparent z-10 top-0 left-0 flex flex-col justify-end"                >

                    <Card className="h-[250px] w-[80%] mx-auto mb-7 relative">
                        <button className="absolute top-1.5 right-3 cursor-pointer font-bold text-2xl" onClick={() => setModal(false)}>&times;</button>
                        {/*                     <img src={selectedProduct?.images} alt="img" />
 */}                </Card>

                </div>

            </div>

        </>

    );
}

export default ProductDetails;