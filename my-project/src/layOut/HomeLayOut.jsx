import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navber from "../components/Navber";


const HomeLayOut = () => {
    return (
        <div className="font-poppins">
            {/* Header section start*/}

            <Header />

            <section className="w-11/12 mx-auto">
                <LatestNews />
            </section>

            {/* Header section end*/}


            {/* Navber section start */}

            <section className="w-11/12 mx-auto py-2">
                <Navber />
            </section>

            {/* Navber section end */}



            {/* Main section */}
        </div>
    );
};

export default HomeLayOut;