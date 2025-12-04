import Header from "../components/Header";
import ProductImage from "../../public/image.png"

const ProductDetail = () => {
    return (
        <div>
            <Header />
            <div className="bg-white w-[80%] m-auto">
                <div className="mt-4">
                    <img className="w-[45%]" src={ProductImage} alt="" />
                </div>
                <div>
                    <small>Outfit {">"} Shoe & Slippers</small>
                    <small>4.5/5 (459 Reviews)</small>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;