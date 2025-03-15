import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsComponent = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>

            <div className="join join-vertical w-full space-y-3 *:bg-base-100 ">
                <button className="btn join-item justify-start hover:border-b-sky-600">
                    <FaFacebook /> Facebook
                </button>
                <button className="btn join-item justify-start hover:border-b-sky-600">
                    <FaInstagram /> Instagram
                </button>

                <button className="btn join-item justify-start hover:border-b-sky-600">
                    <FaTwitter /> Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUsComponent;