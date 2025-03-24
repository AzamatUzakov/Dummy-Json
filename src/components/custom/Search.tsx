import React, { useContext, useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "../ui/input";
import { ProductContext } from "@/context/ProductContext";


interface SearchProps {

}

const Search: React.FC<SearchProps> = () => {

    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }
    const { products, filtered, setFiltered } = context;


    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const filter = products.filter((item) => (
            item.title?.toLowerCase().includes(search.toLowerCase().trim())
        ))
        setFiltered(filter)
    }, [search, products])




    return (

        <>
            <div>

                <Card className="w-[350px] mx-auto">
                    <CardHeader>
                        <CardTitle>Search</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Input id="name" placeholder="Name of your project"
                                        name="search"
                                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                            const target = e.target as HTMLInputElement
                                            setSearch(target.value)
                                        }}
                                    />
                                </div>

                            </div>
                        </form>
                    </CardContent>
                </Card>


            </div>
        </>
    );
}

export default Search;