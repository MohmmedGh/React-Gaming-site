import './LargeCard.css'
import { FaCheckCircle, FaEye, FaGamepad } from "react-icons/fa";
import { PrimaryButtonSm } from '../index';

const LargeCard = (p) => {
    return (
        <div className='col'>
            <div className='LargeCard-game'>
                <div className='LargeCard-content'>
                    <div className='LargeCard-image'>
                        <img src={p.image} alt={p.image} />
                        <span className='live-btns'><PrimaryButtonSm>Live</PrimaryButtonSm></span>
                        <span className='info-btns'><PrimaryButtonSm><FaEye />12K </PrimaryButtonSm></span>
                        <span className='game-btns'><PrimaryButtonSm><FaGamepad />Cs-Go </PrimaryButtonSm></span>
                    </div>
                    <div className='content'>
                        <div className='prfile'>
                            <img src={p.profile} alt='' />
                        </div>
                        <div className='text'>
                            <span><FaCheckCircle className='icon' />{p.caption}</span>
                            <h5>{p.detail}</h5>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LargeCard