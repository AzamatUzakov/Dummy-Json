import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "../ui/input";


interface SearchProps {

}

const Search: React.FC<SearchProps> = () => {
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
                                    <Input id="name" placeholder="Name of your project" />
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