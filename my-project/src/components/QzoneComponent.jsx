import swimming from '../assets/swimming.png'
import playGround from '../assets/playground.png'
import classPic from '../assets/class.png'
import bg from '../assets/bg.png'

const QzoneComponent = () => {
    return (
        <div className='bg-gray-200 p-2'>
            <h2 className="font-semibold ml-3">Q-Zone </h2>
            <div className='flex flex-col justify-center items-center'>
                <img src={swimming} alt="" />
                <img src={playGround} alt="" />
                <img src={classPic} alt="" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default QzoneComponent;