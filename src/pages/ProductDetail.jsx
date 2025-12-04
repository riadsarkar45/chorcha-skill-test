import Header from "../components/Header";
import ProductImage from "../../public/image.png"
import { useState } from "react";

const ProductDetail = () => {
    const [selectSize, setSelectedSize] = useState("")
    const colors = ["RED", "BLUE", "GREEN"];
    const size = ["S", "M", "XL"];
    const variant = ["USA", "China", "Bangladesh"]

    const handleSelectSize = (selectedSize) => {
        setSelectedSize(selectedSize)
        console.log(selectSize);
    }
    return (
        <div>
            <Header />
            <div className="bg-white w-[80%] m-auto grid gap-4 mt-4 grid-cols-3">
                <div className="">
                    <img className="w-[30rem]" src={ProductImage} alt="" />
                </div>
                <div>
                    <div>
                        <small>Outfit {">"} Shoe & Slippers</small>
                        <small>4.5/5 (459 Reviews)</small>
                        <p>Originally a soccer trainer, the Adidas Samba has evolved into a
                            streetwear icon known for its classic low-profile silhouette and distinctive
                            T-toe design...See more
                        </p>
                    </div>
                    <div className="mb-2">
                        <h2>Colors</h2>
                        <div className="flex gap-2">
                            {
                                colors.map((cols, i) =>
                                    <button  onClick={() => handleSelectSize(cols)} className={`${selectSize === cols ? 'bg-green-500 bg-opacity-10 ' : ''} border p-1 rounded-md`} key={i}>{cols}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2>Size</h2>
                        <div className="flex gap-2">
                            {
                                size.map((size, i) =>
                                    <button className="border bg-green-500 bg-opacity-10 p-1 rounded-md" key={i}>{size}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="mb-2 ">
                        <h2>Variant</h2>
                        <div className="gap-2 flex">
                            {
                                variant.map((cols, i) =>
                                    <button className="border bg-green-500 bg-opacity-10 p-1 rounded-md" key={i}>{cols}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="mb-2 ">
                        <div className="gap-2 flex">
                            <button className="bg-green-600 bg-opacity-20 border border-green-600 p-2 rounded-lg w-full">Add to cart</button>
                            <button className="bg-green-600 p-2 rounded-lg w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 border rounded-md p-2">
                    <h2 className="uppercase border-b mb-3 border-black-200">delivery information</h2>
                    <div className="mb-4">
                        <h2>Delivery Fee</h2>
                        <small>70TK</small>
                    </div>
                    <div className="mb-4">
                        <h2>Estimate Time</h2>
                        <small>3-4 Days</small>
                    </div>
                    <div className="mb-4">
                        <h2>Cash On Delivery Available</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;