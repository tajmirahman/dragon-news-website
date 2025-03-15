import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialComponent = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3">Login With</h1>
            <div className="space-y-3">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialComponent;