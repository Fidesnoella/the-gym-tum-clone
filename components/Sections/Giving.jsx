import Button from '../ui/Button';
import Wrapper from '../Wrapper'

const Giving = () => {
    return (
        <Wrapper>
            <div className='w-full bg-lightGray mb-12 mt-24 py-10 text-primary flex flex-col items-center justify-center gap-y-5 px-5'>
                <h2 className='text-3xl text-center font-bold'>Giving</h2>
                <p className='text-[1.625rem] text-lg'>Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.</p>
                <Button style={"p-5 font-bold"}>SUPPORT US</Button>
            </div>
        </Wrapper>
    );
}

export default Giving;