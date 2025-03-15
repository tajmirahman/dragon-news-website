import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftLayout from "../components/LayOutComponent/LeftNav";
import RightNav from "../components/LayOutComponent/RightNav";
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
            <main className="w-11/12 mx-auto grid md:grid-cols-12">

                <aside className="col-span-3">
                    <LeftLayout />
                </aside>

                <section className="col-span-6">
                    <Outlet />
                </section>

                <aside className="col-span-3">
                    <RightNav />
                </aside>
            </main>
            {/* Main section end*/}
        </div>
    );
};

export default HomeLayOut;