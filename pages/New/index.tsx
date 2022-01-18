import NavBar from "../components/Navbar";

export function Card(x: {
    productName: string | undefined;
    productPrice: string | undefined;
    imgSrc: string | undefined }) {
    return (
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
                <img className="hover:grow hover:shadow-lg"
                     src={x.imgSrc}/>
                <div className="pt-3 flex items-center justify-between">
                    <p className="">{x.productName}</p>
                </div>
                <p className="pt-1 text-gray-900">{x.productPrice}</p>
            </a>
        </div>
    )
}


export function Card2(x: {
    productName: string | undefined;
    productPrice: string | undefined;
    imgSrc: string | undefined }) {
    return (
        <div className="flex justify-center items-center bg-blue-lightest w-full md:w-1/2 xl:w-1/3 p-6">
        <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
            <img className="w-1/2 h-full rounded-l-sm" src={x.imgSrc} alt="Room Image"/>
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest">{x.productName}</h3>

                        <span className="text-5xl text-grey-darkest">₹23.00</span>
                        <div className="flex items-center mt-4">
                            <div className="pr-2 text-xs">
                                per 90 meters
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gray-200 p-3 flex items-center justify-between transition hover:bg-grey-light">
                        Buy Now
                    </div>
                </div>
        </div>
        </div>

    )
}

export default function About () {
    return (
        <>
            <NavBar/>
            <section className="bg-white py-8">

                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                               href="#">
                                New products
                            </a>
                        </div>
                    </nav>

                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/SV/KX/WZ/SELLER-2099169/rubber-cables-500x500.jpg"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://3.imimg.com/data3/JT/YO/MY-989308/silicone-rubber-cables-250x250.jpg"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/JC/ZF/MT/SELLER-11798530/silicone-rubber-cables-500x500.jpg"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/LR/IC/MY-675191/silicone-rubber-cables-500x500.png"}
                    />

                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/OQ/NX/DZ/SELLER-1729523/silicone-rubber-cable-500x500.jpg"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/YL/MC/JQ/SELLER-25172538/heat-resistance-silicone-rubber-cable-500x500.png"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://4.imimg.com/data4/HI/XO/MY-1749292/rubber-insulated-wires-500x500.jpg"}
                    />
                    <Card2
                        productName={"Product Name"}
                        productPrice={"£9.99"}
                        imgSrc={"https://5.imimg.com/data5/SY/DY/ME/SELLER-1100898/submersible-pump-cable-500x500.jpg"}
                    />
                </div>
            </section>

            <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
                <div className="container flex px-3 py-8 ">
                    <div className="w-full mx-auto flex flex-wrap">
                        <div className="flex w-full lg:w-1/2 ">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">About</h3>
                                <p className="py-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis
                                    tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">Social</h3>
                                <ul className="list-reset items-center pt-3">
                                    <li>
                                        <a className="inline-block no-underline hover:text-black hover:underline py-1"
                                           href="#">Add social links</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
