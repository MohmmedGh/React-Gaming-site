import './Card.css'
import { FaStar, FaDownload } from "react-icons/fa";

const Card = (p) => {
    return (
        <div className='card-game'>
            <div className='game-content'>
                <div className='img-game'>
                    <img src={p.imag} alt={p.image} />
                </div>
                <div className='content'>
                    <div className='text'>
                        <h5>{p.name}</h5>
                        <span>{p.kind}</span>
                    </div>
                    <div className='numbers'>
                        <p><span className='star-icon'><FaStar /></span>{p.rate}</p>
                        <p><span className='download-icon'><FaDownload /></span>{p.download}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card