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

            <nav className="w-11/12 mx-auto py-2">
                <Navber />
            </nav>

            {/* Navber section end */}

            {/* Main section start*/}
            <main className="w-11/12 mx-auto grid grid-cols-12">
                <aside className="col-span-3">Left Side</aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">Right Side</aside>
            </main>
            {/* Main section end*/}
        </div>
    );
};

export default HomeLayOut;