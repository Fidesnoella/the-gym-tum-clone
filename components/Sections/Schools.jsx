import Wrapper from '../Wrapper'
import GridCard from '../cards/GridCard'
import Neubau_EI_AH from '../../public/assets/Neubau_EI_AH.webp'
import Button from '../ui/Button'


const Schools = () => {
    return (
        <Wrapper>
            <GridCard image={Neubau_EI_AH}
                style={"bg-purple text-primary"}
                title={"Schools and Research Centers"}
                subtitle={"They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."}
                btn={<Button style={"bg-primary text-white mb-5 p-4 font-bold"}>ORGANISATION</Button>}
            />
        </Wrapper>
    );
}

export default Schools;