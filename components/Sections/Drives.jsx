import Wrapper from '../Wrapper'
import GridCard from '../cards/GridCard';
import president from '../../public/assets/Presidential_student.webp'
import Button from '../ui/Button';

const Drives = () => {
    return (
        <Wrapper>
            <GridCard image={president}
                style={"bg-skyBlue"}
                title={"What drives us: President Thomas F. Hofmann about TUM"}
                subtitle={"Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so."}
                btn={<Button style={"bg-white text-skyBlue p-4 font-bold"}>READ MORE</Button>}
            />
        </Wrapper>
    );
}

export default Drives;