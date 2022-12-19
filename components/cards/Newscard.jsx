import Image from "next/image";

const NewsCard = ({ image, title, subtitle, paragraph, date, tag }) => {
    return (
        <div className='flex flex-col w-80  text-primary hover:text-skyBlue cursor-pointer gap-y-3'>
            <Image src={image} alt="image" width={300} height={400} />
            <h3 className="font-bold">{title}</h3>
            <h3 className="font-bold text-xl">{subtitle}</h3>
            <p className="text-sm">{paragraph}</p>
            <div className="text-sm flex justify-between">
                <span>{date}</span>
                <span>{tag}</span>
            </div>
        </div>
    );
}

export default NewsCard;