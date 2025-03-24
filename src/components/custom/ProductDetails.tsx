import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";

interface ProductDetailsProps {

    setModal: (value: boolean) => void
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ setModal }) => {


    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }

    const { selectedProduct } = context;


    return (
        <>
            <div className="">
                <div className="fixed h-screen w-full bg-gradient-to-t from-white to-transparent z-10 top-0 left-0 flex flex-col justify-end ">

                    <div className="relative h-[300px] w-[90%] sm:w-[70%] lg:w-[50%] mx-auto bg-gradient-to-br from-white to-gray-100 text-gray-800 rounded-2xl border border-gray-300 p-6 shadow-2xl flex items-center space-x-6 overflow-hidden mb-7 transition-all duration-300">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold cursor-pointer transition duration-300 hover:scale-110"
                            onClick={() => setModal(false)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct?.images?.[0]}
                            className="w-[130px] h-[190px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                            alt="img"
                        />
                        <div className="flex flex-col items-start space-y-2">
                            <h1 className="text-2xl font-bold text-gray-900">{selectedProduct?.title}</h1>
                            <p className="text-gray-700 text-sm leading-relaxed text-start">{selectedProduct?.description}</p>
                            <div className="flex items-center justify-between w-full mt-auto">
                                <p className="text-xl font-semibold text-green-700">${selectedProduct?.price}</p>
                                <div className="flex items-center space-x-1">
                                    <span className="text-yellow-400 text-lg">⭐</span>
                                    <p className="text-gray-800 font-medium">{selectedProduct?.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>

    );
}

export default ProductDetails;