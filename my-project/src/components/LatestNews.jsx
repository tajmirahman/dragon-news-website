import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="bg-gray-100 p-2">
            <div className="flex justify-center items-center gap-2">
            <h1 className="bg-[#D72050] text-white font-bold p-2">Latest</h1>

            <Marquee pauseOnHover={true} speed={70} className="space-x-10">
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatem.</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatem.</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatem.</Link>
            </Marquee>
            </div>

        </div>
    );
};

export default LatestNews;