import Logo from "../../public/assets/tum-logo.svg";
import Image from "next/image";
import arrow from '../../public/assets/arrow.svg'
import arrow_right from '../../public/assets/arrow_right.svg'
import partners from '../../public/assets/partners.svg'
import schools from "../../data/schools";
import quickLinks from "../../data/quickLinks";
import facebook from '../../public/assets/facebook.svg'
import youtube from '../../public/assets/youtube.svg'
import twitter from '../../public/assets/twitter.svg'
import instagram from '../../public/assets/instagram.svg'
import linkedin from '../../public/assets/linkedin.svg'
import rss from '../../public/assets/rss.svg'



const Footer = () => {
    return (
        <>
            <footer className=" ">
                <section className="bg-[#0A2D57] text-white ">
                    <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]">
                        <div className="flex gap-5">
                            <div>
                                <Image src={Logo} alt="logo" />
                                <span />
                            </div>

                            <div className="flex flex-col gap-5">
                                <p >Technical University of Munich <br /> ArcisstraBe 21 <br /> 80333 Munchen

                                </p>
                                <p>Phone: <span> +49 (0)89-289-01</span> <br />Fax: +49 (0)89-289-22000</p>

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className="font-bold ">Let{"'"}s shape the future together</p>
                            <p className="flex items-baseline gap-2">Support us <span><Image src={arrow} className="w-4 h-4" alt="arrow" /></span> </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-bold">Latest news</p>
                            <p className="flex gap-3 items-center"><Image src={arrow_right} className="w-3 mb-1 h-5" alt="arrow" />Germany{"'"}s strongest university in business sciences</p>
                            <p className="flex gap-3 items-center"><Image src={arrow_right} className="w-3 mb-1 h-5" alt="arrow" />TUM partners with Nobel Sustainability Trust</p>
                            <p className="flex gap-3 items-center"><Image src={arrow_right} className="w-3 mb-1 h-5" alt="arrow" />Antihelium nuclei as messengers from the depths of the galaxy</p>
                        </div>
                    </div>
                    <div className="py-[27px]">
                        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 ">
                            <h1 className="font-bold text-sm">Schools and <br /> Departments:</h1>
                            <div className="flex w-full flex-wrap gap-4">
                                {schools.map((schol, index) => {

                                    return (
                                        <p key={index} className="flex gap-1 items-baseline text-sm hover:underline cursor-pointer">{schol.schoolsName} <Image src={arrow} className="w-4 h-4" alt="arrow" /></p>

                                    )

                                })}
                            </div>
                        </div>
                        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]">
                            <h1 className="font-bold text-sm">Quicklinks:</h1>
                            <div className="flex w-full flex-wrap gap-4">
                                {quickLinks.map((links, index) => {

                                    return (
                                        <p key={index} className="flex gap-1 items-baseline text-sm hover:underline cursor-pointer">{links.link} <Image src={arrow} alt="arrow" className="w-4 h-4" /></p>

                                    )

                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-primary text-white py-[26px]">
                    <div className="px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto">
                        <div className="xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full">
                            <ul className="flex gap-4 xl:gap-6 flex-wrap">
                                <li>Jobs</li>
                                <li>Feedback</li>
                                <li>Press and Media</li>
                                <li>Accessibility</li>
                                <li>Privacy Policy</li>
                                <li>Legal Notice</li>
                            </ul>
                            <div className="flex gap-6">
                                <Image src={facebook} alt="facebook" width={20} height={20} />
                                <Image src={youtube} alt="youtube" width={20} height={20} />
                                <Image src={twitter} alt="twitter" width={20} height={20} />
                                <Image src={instagram} alt="instagram" width={20} height={20} />
                                <Image src={linkedin} alt="linkedin" width={20} height={20} />
                                <Image src={rss} alt="wifi" width={20} height={20} />

                            </div>
                        </div>

                        <div className="flex gap-8 pt-[1.6875rem]">
                            <Image src={partners} alt="partners" width={32} height={59.51} />
                            <div className="flex flex-col gap-4 hover:underline text-xs">
                                <p>TUM Partners of Excellence</p>
                                <p>Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>
                            </div>
                        </div>

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;