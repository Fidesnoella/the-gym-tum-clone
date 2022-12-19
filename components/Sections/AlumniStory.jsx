import phillipe from '../../public/assets/Dr_Philip.jpeg'
import Button from '../ui/Button';
import Image from 'next/image';
import Wrapper from '../Wrapper';

const AlumniStory = () => {
    return (
        <Wrapper>
            <div className='flex mt-28'>
                <div className="pl-5 gap-y-5 text-white bg-stone items-center w-[50%] h-[30%] mt-10 py-10">
                    <h3 className='text-[1.75rem] font-bold leading-[2.1rem] pt-4 tracking-thin'>&quot;Here I have met a lot of people who are breaking new ground&quot;</h3>
                    <p className='leading-7 pt-3'>Philip Häusser, alumnus</p>
                    <span className='mx-5'>
                        <Button style={"p-5"}>READ THE ALUMNI STORT</Button>
                    </span>
                </div>
                <div className='w-[50%]'>
                    <Image src={phillipe} alt="imagegrid" />
                </div>
            </div>
        </Wrapper>
    );
}

export default AlumniStory;