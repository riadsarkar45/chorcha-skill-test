import Header from "../components/Header";
import ProductImage from "../../public/image.png"

const ProductDetail = () => {
    const colors = ["RED", "BLUE", "GREEN"];
    const size = ["S", "M", "XL"];
    const variant = ["USA", "China", "Bangladesh"]
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
                                    <button className="border bg-green-500 bg-opacity-10 p-1 rounded-md" key={i}>{cols}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2>Size</h2>
                        <div className="flex gap-2">
                            {
                                size.map((cols, i) =>
                                    <button className="border bg-green-500 bg-opacity-10 p-1 rounded-md"  key={i}>{cols}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className="mb-2">
                        <h2>Variant</h2>
                        <div className="gap-2 flex">
                            {
                                variant.map((cols, i) =>
                                    <button className="border bg-green-500 bg-opacity-10 p-1 rounded-md"   key={i}>{cols}</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;