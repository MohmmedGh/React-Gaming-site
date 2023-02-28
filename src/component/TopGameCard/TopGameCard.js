import './TopGameCard.css'
import { RoundButton } from '../../component';
import { FaStar, FaDownload } from "react-icons/fa";

const TopGameCard = (p) => {
    return (
        <div className='row card-top'>
            <div className='col imag'>
                <img src={p.image} alt='' />
            </div>
            <div className='col'>
                <div className='brows-info'>
                    <h6>{p.name}</h6>
                    <span>{p.kind}</span>
                </div>
                <div className='rate'>
                    <span><FaStar className='star-icon' />{p.rate}</span>
                    <span><FaDownload className='icon' />{p.download}</span>
                </div>
            </div>
            <div className='col'>
                <RoundButton>
                    <FaDownload />
                </RoundButton>
            </div>
        </div>
    )
}

export default TopGameCard