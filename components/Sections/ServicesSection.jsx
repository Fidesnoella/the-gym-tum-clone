import Wrapper from '../Wrapper'
import Services from '../cards/Services';
import Button from '../ui/Button';
import Chakrabarti from '../../public/assets/Chakrabarti_Bockelmann.jpeg';
import shutter from '../../public/assets/csm_Shutterstock.jpeg';
import shop from '../../public/assets/Shop.jpeg';


const ServicesSection = () => {
    return (
        <Wrapper>
            <div className='grid grid-cols-3 gap-x-10 mt-10'>
                <Services image={Chakrabarti}
                    title={"Stay connected"}
                    paragraph={"Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!"}
                    btn={<Button style={"bg-white border border-skyBlue text-skyBlue py-4  px-8 font-bold"}>Join the Tum Community </Button>}
                />
                <Services image={shutter}
                    title={"TUMint Relocation Service"}
                    paragraph={"All-inclusive onboarding package for international students assists with accommodation and much more."}
                    btn={<Button style={"bg-white border border-skyBlue text-skyBlue py-4  px-8 font-bold"}>See Our Services</Button>}
                />
                <Services image={shop}
                    title={"Discover the TUMshop"}
                    paragraph={"Merchandising items, conference materials and other products in the corporate design can be found online and on site."}
                    btn={<Button style={"bg-white border border-skyBlue text-skyBlue py-4  px-8 font-bold"}>Shop Online</Button>}
                />
            </div>
        </Wrapper>
    );
}

export default ServicesSection;