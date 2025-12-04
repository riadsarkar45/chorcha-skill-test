import UserIcon from "../../public/user-svgrepo-com.svg"
const Header = () => {
    const productItems = ["Phones", "Outfit", "Laptop", "Furniture", "Smart Gadgets", "DIY"]
    return (
        <div>
            <div>
                <div className='bg-black '>
                    <div className="w-[80%] p-2 m-auto">
                        <div className="flex m-auto justify-between items-center ">
                            <div className="flex items-center gap-8 ">
                                <h2 className="text-white text-2xl">Chorcha Merch</h2>
                                <input className="w-[15rem] p-2 rounded-md" type="text" placeholder="Search Products" />
                            </div>
                            <div className="text-white text-md flex items-center gap-2">
                                <h2>Cart</h2>
                                <h2>TK549</h2>
                                <button className="bg-white p-1 rounded-sm text-black ">
                                    Login
                                </button>
                            </div>
                        </div>


                    </div>

                </div>



                <div className="flex w-[80%] m-auto gap-2 border-r" >
                    {
                        productItems.map((items, i) =>
                            <h3 className="border-r text-lg p-3" key={i}>
                                {items}
                            </h3>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;