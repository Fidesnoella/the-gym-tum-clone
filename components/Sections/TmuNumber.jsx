import Wrapper from '../Wrapper'

const TmuNumber = () => {
    return (
        <Wrapper>
            <h1 className='text-primary font-bold text-[2rem] tracking-thin leading-[2.375rem] mt-24 mb-12'>TUM in numbers</h1>
            <div className='grid grid-cols-5 gap-x-5'>
                <div className='bg-skyBlue text-white flex flex-col col-span-3 font-bold pl-12 pb-14'><span className='text-[8.125rem]'>5,000</span><span className='text-[2.125rem]'>Students</span></div>
                <div className='font-bold col-span-2 grid gap-5'>
                    <div className='bg-yellow flex justify-between items-center gap-x-10 px-3'>
                        <span className='text-[5.625rem]'>176</span>
                        <span className='text-[1.375rem]'>ERC Grants for cutting-edge research</span>
                    </div>
                    <div className='bg-orange flex justify-between items-baseline px-3'>
                        <span className='text-[5.625rem]'>18</span>
                        <span className='text-[1.375rem]'>Nobel laureates</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default TmuNumber;