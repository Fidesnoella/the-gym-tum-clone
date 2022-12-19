import Image from "next/image";

const Services = ({ image, title, paragraph, btn }) => {
    return (
        <div className='flex flex-col text-primary hover:text-skyBlue cursor-pointer gap-y-3'>
            <Image src={image} className={"w-80 h-72"} alt="imageservice" />
            <h3 className="font-bold text-2xl">{title}</h3>
            <p className="text-lg">{paragraph}</p>
            <span>{btn}</span>
        </div>
    );
}

export default Services;