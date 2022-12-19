import Button from "../ui/Button";
import Image from "next/image";
import Wrapper from "../Wrapper";
import Card from '../cards/Newscard';
import news from "../../data/news";

const News = () => {
    return (
        <Wrapper>
            <div className="flex mt-12 gap-x-24">
                <div className="flex flex-col gap-y-6 text-primary w-[44.5rem]">
                    <h2 className="text-[2rem] font-bold">News from TUM</h2>
                    <p className="text-2xl tracking-[0.2px]">News, research results and events: everything that enthuses people at our university.</p>
                    <Button style={"p-5 text-white mb-10 font-bold"}>SELL ALL</Button>
                </div>
                <div className="flex flex-row lg:flex-col gap-y-12">
                    <div className="flex gap-6">
                        {news.slice(0, 2).map((news, index) => <Card key={index} {...news} />)}
                    </div>
                    <div className="flex -ml-0 lg:-ml-32 gap-6">
                        {news.slice(2).map((news, index) => <Card key={index} {...news} />)}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default News;