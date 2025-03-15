import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialComponent = () => {
    return (
        <div>
            <h1>Login With</h1>
            <div>
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialComponent;