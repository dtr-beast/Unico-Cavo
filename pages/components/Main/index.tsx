import { useRouter } from 'next/router'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import Image from "next/image";
import Link from 'next/link'

import wire1 from "@/images/wire1.png"
import wire2 from "@/images/wire2.png"
import wire3 from "@/images/wire3.png"
import wire4 from "@/images/wire4.png"
import concealed1 from "@/images/consealed.png"
import logo from '@/images/logo.png'


export function Button(x: {
    title?: string;
    onClick: any;
    full: boolean }) {
    let classNames = "text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent"

    if (x.full) {
        classNames = `${classNames} w-full`
    }
    return (
        <button onClick={x.onClick} className={classNames}>
            <div>
                {x.title}
            </div>
        </button>
    )
}

export const Tag = (x: { category: string; year: string }) => {
    return (
        <div className="border-l border-white px-3 pt-1 mb-10">
            <p className="text-white text-xs tracking-wider m-0 leading-tight">{x.category}</p>
            { x.year && <p className="text-white text-xs tracking-wider m-0 leading-tight">{x.year}</p>}
        </div>
    )
}

export const Center = (x: { price: string; title: string, link: string }) => {
    const router = useRouter()
    function navigate() {
        router.push(x.link)
    }
    return (
        <div>
            <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{x.title}</p>
            <p className="py-6 tracking-wide">FROM <span>₹{x.price}/90m</span></p>
            <Button
                onClick={navigate}
                title="More Info"
                full={false}
            />
        </div>
    )
}

export const Footer = (x: { designer: string }) => {
    return (
        <div className="flex flex-1 flex-col justify-end pb-10 mt-4">
            <p className="font-light text-xs tracking-tight m-0 leading-tight mb-2">Design by</p>
            <p className="text-xxs font-semibold tracking-tight m-0 leading-tight">{x.designer}</p>
        </div>
    )
}

export const DisplayMedium = (props: {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
    link: string }) => {
    return (
        <div className="mLeft mb-4 lg:mb-0 bg-gray-300 p-8 pb-0 hover:bg-light-200">
            <Link href={`${props.link}`}>
                <a aria-label={props.title}>
                    <div className="flex flex-column justify-center items-center h-56">
                        <Image src={props.imageSrc} alt={props.title} className="mimg w-3/5" height={"220px"} width={"320px"}/>
                    </div>
                    <div className="mb-8">
                        <p className="text-3xl font-semibold mb-1">{props.title}</p>
                        <p className="text-xs text-gray-700">{props.subtitle}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export const DisplaySmall = (x: {
    link: string;
    title: string;
    subtitle: string;
    imageSrc: any }) =>  (
    <div className="lg:w-flex-fourth bg-gray-300 ml-2 mr-2 px-2 pt-12 pb-0 lg:p-6 lg:pb-0
  hover:bg-light-200 lg:mb-0 mb-2">
        <Link href={x.link}>
            <a aria-label={x.title}>
                <div className="flex flex-column justify-center items-center h-45">
                    <Image alt={x.title} src={x.imageSrc} className="simg w-3/5"  height={"220px"} width={"320px"}/>
                </div>
                <div className="">
                    <p className="text-xl font-semibold mb-1">{x.title}</p>
                    <p className="text-xs text-gray-700 mb-4">{getTrimmedString(x.subtitle, 150)}</p>
                </div>
            </a>
        </Link>
    </div>
)

export function getTrimmedString(string: string, length = 8) {
    if (string.length <= length) {
        return string
    } else {
        return string.substring(0, length) + '...'
    }
}

export function titleIfy(slug: string) {
    const words = slug.split('-');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }
    return words.join(' ')
}

export default function Main() {
    return (
        <>
            <section className="hero text-gray-600 body-font">
                <div className="container px-0 py-0 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="heading backdrop-blur-xl:text-3xl text-5xl font-medium title-font mb-4 text-gray-900">
                            Welcome to Unico Cavo
                        </h1>
                        <p className="mx-auto leading-relaxed text-xl">
                            A Leading Wire And Cables Manufacturers With Quality Products.
                        </p>
                    </div>
                </div>
                <div className="bg-red-400 p-6 pb-10 smpb-6 flex lg:flex-row flex-col container px-2  mx-auto">
                    <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
                        <Tag year="PVC Insulated" category="FR-LSH" />
                        <Center price="1200" title={"Premium Wires"} link={`#`} />
                        <Footer designer="Aashendra Rajput" />
                    </div>
                    <div className="flex flex-1 justify-center items-center relative">
                        <div className="z-10">
                            <Image src={wire1} className="w-136" alt="Showcase item" />
                        </div>
                        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88 bg-blue-300 z-0 rounded-full" />
                    </div>

                </div>

            </section>
            <br/>
            <div className=" container mx-auto lg:my-8 lg:grid-cols-2 grid-cols-1 grid gap-4 my-4">
                <DisplayMedium
                    imageSrc={wire2}
                    subtitle={`50 items`}
                    title={titleIfy("Wires")}
                    link={`#`}
                />
                <DisplayMedium
                    imageSrc={concealed1}
                    subtitle={`50 items`}
                    title={titleIfy("Concealed Box")}
                    link={`#`}
                />
            </div>
            <div className="pt-10 pb-6 flex flex-col items-center">
                <h2 className="text-4xl mb-3">Trending Now</h2>
                <p className="text-gray-600 text-sm">Find the perfect piece or accessory to finish off your favorite room in the house.</p>
            </div>
            <div className="tren my-8 flex flex-col lg:flex-row justify-between sm: ml-2 mr-2">
                <DisplaySmall
                    imageSrc={wire1}
                    title={"Multistrand Flex Multicore Cables"}
                    subtitle={"Multistrand bright electrolytic annealed bare copper conductor"}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire2}
                    title={"1100V Silicon Cable"}
                    subtitle={"Silicon cables according to ISI standards and the market guidelines"}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire3}
                    title={"Flex Dual Insulated Multicolor Cables"}
                    subtitle={"PVC insulated & PVC sheathed multicolor round flexible Industrial cables."}
                    link={`#`}
                />

                <DisplaySmall
                    imageSrc={wire4}
                    title={"PVC-LSH PVC Insulated Single Core Cables"}
                    subtitle={"Single Core unsheathed Multistrand High Conductivity Insulated Cable."}
                    link={`#`}
                />

            </div>

            <div className="max-w-6xl mx-auto px-8 py-16">
                <div className="relative">
                    <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
                        <div className="bg-indigo-700 h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                            {/*<img className="absolute h-full w-full object-cover"*/}
                            {/*     src="https://stripe.com/img/v3/payments/overview/photos/slack.jpg" alt=""/>*/}

                            <Image className="absolute h-1/3 w-1/3 object-cover" src={logo} alt="Unica Cavo Logo"/>
                        </div>
                        <div className="relative lg:w-7/12 bg-white">
                            <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor"
                                 viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="50,0 100,0 50,100 0,100"/>
                            </svg>
                            <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                                <p>
                                    Electrical cable taglines are one of the best technologies in the modern world.
                                    Domestic use of the electric current is always being a risky task in our life.
                                    We are a leading power and control cable manufacturer and supplier offering an
                                    extensive range of power and control cables. Our high quality products in power
                                    and control cable category are known for their superior performance and unmatched
                                    quality. As a result of our continuous focus on quality, we are known as one of the
                                    best power and control cables brands in India.
                                </p>
                                <p className="mt-6">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-900">Learn
                                        more about our users &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

