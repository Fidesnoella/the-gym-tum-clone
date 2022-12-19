import Link from "next/link";
import Image from "next/image";
import menu from "../../public/assets/menu.svg";
import logo from "../../public/assets/tum-logo.svg";
import search from "../../public/assets/search.svg";

const Navbar = () => {
    return (
        <>
            <div className="bg-primary text-white fixed z-20 w-full">
                <div className="mx-auto container max-w-[1713px]">
                    <div className="flex items-center justify-between py-5 px-6">
                        <div className="flex items-center gap-x-4">
                            <div><Image src={menu} alt="menu" /></div>
                            <Link href={"/"}>
                                <div className="flex gap-x-3"><Image src={logo} alt="logo" className="leading-6" />
                                    <span className="text-xs leading-[14px] tracking-[0.2px]">
                                        Technical<br />University<br />of Munich
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex gap-x-14 items-center">
                            <div>
                                <ul className="hidden xl:flex text-sm font-bold leading-4 gap-6 cursor-pointer">
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/news">NEWS AND EVENT</Link>
                                    </li>
                                    <li className="border-b-2 border-primary hover:border-white"><Link href="/studies">STUDIES</Link>
                                    </li>
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/learning">LIFELONG LEARNING</Link>
                                    </li>
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/research">RESEARCH</Link></li>
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/innovation">INNOVATION</Link>
                                    </li>
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/community"> COMMUNITY</Link>
                                    </li>
                                    <li className="border-b-2 border-primary hover:border-white">
                                        <Link href="/about">ABOUT TUM</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex gap-x-2 items-center">
                                    <li className="cursor-pointer opacity-50 hover:opacity-100">DE</li>
                                    <li className="border-l-2 pl-2">EN</li>
                                </ul>
                            </div>
                            <div><Image src={search} alt="search" className="w-6 h-6" /></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;