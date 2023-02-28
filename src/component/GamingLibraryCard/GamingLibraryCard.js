import { SecondaryButton } from '../index'
import './GamingLibraryCard.css'

const GamingLibraryCard = (p) => {
    return (
        // <div className='game-card'>
        //     <ul className=''>
        //         <li><img src={p.imag} alt={p.name} /></li>
        //         <li><h6>{p.name}</h6><span>{p.kind} </span></li>
        //         <li><h6>Date Added</h6><span>{p.date} </span></li>
        //         <li><h6>Hours Played</h6><span>{p.hour} </span></li>
        //         <li><h6>Current</h6><span>{p.download}</span></li>
        //         <li>
        //             <SecondaryButton>Download</SecondaryButton>
        //         </li>
        //     </ul>
        // </ div>

        <div className='game'>
            <div className='row my-row'>
                <div className='col culom '>
                    <img src={p.imag} alt={p.name} />
                </div>
                <div className='col culom'><h6>{p.name}</h6><span>{p.kind} </span></div>
                <div className='col culom'><h6>Date Added</h6><span>{p.date} </span></div>
                <div className='col culom'><h6>Hours Played</h6><span>{p.hour} </span></div>
                <div className='col culom'><h6>Current</h6><span>{p.download}</span></div>
                <div className='col culom'>
                    <SecondaryButton>Download</SecondaryButton>
                </div>

            </div>
        </div>
    )
}

export default GamingLibraryCard