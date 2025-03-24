import { createContext, ReactNode, useState } from "react";

interface Products {
  id?: number;
  title?: string;
  description?: string;
  images: string[] | undefined;
  price?: number;
  rating?: number;
}

interface ProductContextType {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  selectedProduct: Products | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Products | null>>;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
