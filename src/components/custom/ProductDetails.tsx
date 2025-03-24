import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";

interface ProductDetailsProps {

}

const ProductDetails: React.FC<ProductDetailsProps> = () => {


    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("ProductList must be used within a ProductProvider");
    }

    const { selectedProduct } = context;


    return (
        <>

            <div className="fixed h-screen w-full bg-white z-10" >
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis possimus aliquid deserunt incidunt quisquam iste assumenda vel laudantium eum adipisci laboriosam tenetur odio voluptatibus voluptatem non, doloremque, perferendis commodi tempora!
Reiciendis ratione, voluptatibus qui corporis quaerat eveniet impedit in quisquam nulla hic consequuntur est provident dolores suscipit, nemo vero. Officiis illo sint cum omnis dolor dolores fuga aliquam voluptatem repellat.
Quod id expedita dolorum atque quos? Exercitationem, neque deleniti architecto quaerat tempore non ex ipsam, accusantium ea maiores rem eum labore nemo repudiandae, fugiat sunt id! Iure sequi unde at.
Corporis quae esse dolorem magnam! Dolore laborum, quasi dolorum in neque possimus quos nihil natus dicta velit ipsum dolorem adipisci sunt eligendi soluta, quae officia praesentium enim repellat aliquid. Id.
Quasi quam voluptas error quis voluptatibus vel exercitationem repellendus dolorem, voluptates odit alias sed officia dolore placeat. Vitae, reiciendis eligendi. Vel officia expedita nobis odit velit adipisci, sint laborum rem.
Fuga esse suscipit in quos itaque pariatur quasi ad deserunt officiis optio culpa delectus veniam laudantium ratione laborum eligendi, consectetur accusamus error. Mollitia minima neque deleniti aliquam enim? Consectetur, recusandae?
Fugiat dolorum nostrum ab omnis iste, sed repellat, maiores neque officiis placeat labore cum nulla, saepe nam natus odio iure molestiae. Tempore soluta perferendis vitae consequatur, rerum eius similique quidem?
Officiis ad tempora ratione atque magnam, quas deserunt quaerat eveniet provident quisquam, rem, minima modi ducimus nulla alias. Deleniti commodi similique fuga eligendi qui placeat autem expedita natus unde quis!
Adipisci tempora recusandae unde similique, velit modi eligendi nobis optio pariatur. Voluptate reiciendis, accusamus nulla doloremque delectus itaque sit inventore qui. Voluptates illo voluptatibus nemo, consectetur vel accusantium eligendi officiis?
Dolor officia quae vitae quo ad fugit eius alias modi, consectetur provident nam quos a eos, reprehenderit quibusdam veniam repellat ipsa. A tenetur aspernatur officiis repudiandae error delectus, architecto repellat.
Non dignissimos qui soluta labore! Voluptate, esse aspernatur cumque incidunt illo nesciunt itaque quibusdam deserunt, explicabo delectus similique consequatur est totam impedit cupiditate fuga, aut iusto repellendus dolorem assumenda rem!
Eaque mollitia similique placeat beatae! Officia enim, assumenda neque dolor eveniet accusantium blanditiis deleniti, sed repellat doloribus at magni perspiciatis nemo saepe quibusdam atque possimus non numquam, impedit consequuntur obcaecati?
Animi tenetur necessitatibus eum cupiditate culpa cumque rem repudiandae at odio. Laborum officiis facilis tenetur, qui eveniet rerum, similique minima ut facere non corrupti! Beatae vel dolore repellendus nobis quis.
Architecto excepturi, quo nobis repudiandae quas tempora doloremque laboriosam facilis, esse repellendus quis necessitatibus, enim debitis a! Maxime provident mollitia fugiat soluta hic optio, excepturi praesentium labore modi blanditiis pariatur!
Facere nemo voluptates tempore quidem, dolor ipsa placeat, error quasi incidunt fugit voluptatum quaerat dicta molestiae eveniet provident, similique omnis recusandae distinctio sed repudiandae! Asperiores cupiditate excepturi quas illum hic.
Eum, neque modi, nihil maxime odio ab labore consequatur totam voluptatibus rem adipisci nisi deserunt aliquid commodi beatae iusto ullam quos dignissimos delectus praesentium omnis nobis molestiae. Voluptatibus, adipisci a.
Ducimus, et asperiores! Labore voluptatum eos iste ea illum molestias sint fugiat placeat in! Ex sint, eos sit praesentium voluptas dolorem temporibus blanditiis consectetur iusto, molestiae delectus sed corrupti maxime!
Officiis excepturi nam alias aspernatur aut exercitationem itaque, quidem veniam porro libero mollitia, nulla non vero ut est dicta quo? Unde cupiditate aperiam animi doloribus illo placeat, odio est deleniti!
Sapiente, inventore magnam? Laborum deserunt in consequuntur temporibus molestiae officia consectetur iusto fugit, repellendus aliquid quam illum ipsa labore dolore nesciunt esse dolores molestias. Eaque quis harum exercitationem natus magnam.
Possimus eaque, sapiente sint voluptatum amet, dolorum quaerat facere voluptas veritatis, nemo natus sed repellat deleniti architecto officiis! Molestias at necessitatibus aliquam ullam modi, aliquid iusto unde veniam illo libero.
            </div>

        </>

    );
}

export default ProductDetails;