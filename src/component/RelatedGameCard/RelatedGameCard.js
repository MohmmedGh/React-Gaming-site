import './RelatedGameCard.css'
import { FaStar, FaDownload } from "react-icons/fa";

const RelatedGameCard = (p) => {
    return (
        <div className='col-lg-6'>
            <div className='related-card'>
                <div className='related-image'>
                    <img src={p.image} alt='' />
                </div>
                <div className='contents'>
                    <div className='related-info'>
                        <h6>{p.name}</h6>
                        <span><em><FaStar className='star-icon' /></em>{p.rate}</span>
                    </div>
                    <div className='related-info'>
                        <p>{p.studio}</p>
                        <span><em><FaDownload className='icon' /></em>{p.download}</span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default RelatedGameCard