import React from 'react';
import Image from 'next/image';

const GridCard = ({ image, title, subtitle, btn, style }) => {
    return (
        <div className='flex mt-24'>
            <div className='w-[50%]'>
                <Image src={image} alt="imagegrid" />
            </div>
            <div className={`-ml-10 pl-5 gap-y-5 text-white ${style}  items-center w-[50%] h-[30%] mt-10`}>
                <h3 className='text-[1.75rem] font-bold leading-[2.1rem] pt-4 tracking-thin'>{title}</h3>
                <p className='leading-7 pt-3'>{subtitle}</p>
                <span className='mx-5'>{btn}</span>
            </div>
        </div>
    );
}

export default GridCard;