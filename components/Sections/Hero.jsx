
const Hero = () => {
    return (
        <>
            <div className='relative pt-16'>
                <video src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4" className='w-full'></video>
                <div className="px-33 mx-auto container">
                    <div className='text-white absolute top-0 flex flex-col mt-52 gap-y-6'>
                        <h1 className='text-5xl tracking-[0.2px] font-bold leading-[52px] font-RobotoBold'>TUM. The Entrepreneurial <br /> University</h1>
                        <p className='text-xl leading-[30px] tracking-[0.2px]'>Innovation through talent, excellence and responsibility</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;