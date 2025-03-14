import Header from "../components/Header";
import LatestNews from "../components/LatestNews";


const HomeLayOut = () => {
    return (
        <div className="font-poppins">
            {/* Header section start*/}

            <Header />

            <section className="w-11/12 mx-auto">
                <LatestNews />
            </section>

            {/* Header section end*/}


            {/* Navber section */}
            {/* Main section */}
        </div>
    );
};

export default HomeLayOut;