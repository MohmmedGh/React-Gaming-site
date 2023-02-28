import './VideoCard.css'
import { FaEye } from "react-icons/fa";
import { VedioButton } from '../index';

const VideoCard = (p) => {
    return (
        <div className='card-game'>
            <div className='game-content'>
                <div className='img-game'>
                    <img src={p.imag} alt={p.image} />
                    <VedioButton />
                </div>
                <div className='content'>
                    <div className='text'>
                        <h5>{p.name}</h5>
                    </div>
                    <div className='numbers'>
                        <p><span className='eye-icon'><FaEye /></span>{p.seen}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VideoCard