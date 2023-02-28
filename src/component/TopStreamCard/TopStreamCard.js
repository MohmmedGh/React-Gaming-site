import './TopStreamCard.css'
import { PrimaryButtonSm } from '../index';
import { FaCheckCircle } from "react-icons/fa";

const TopStreamCard = (p) => {
    return (
        <div className='top-stream'>
            <ul>
                <li className='list-item'>
                    <img src={p.image} alt='' />
                </li>
                <li className='list-item'>
                    <span className='name'><FaCheckCircle className='icon' />{p.name}</span>
                </li>
                <li className='list-item'>
                    <PrimaryButtonSm>Follow</PrimaryButtonSm>
                </li>
            </ul>
        </div>
    )
}

export default TopStreamCard