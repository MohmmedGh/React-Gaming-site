import './DetailBoster.css'
import imag_game from '../../asset/images/feature-left.jpg'
import imag_boster from '../../asset/images/feature-right.jpg'
import { VedioButton } from '../../component'
const DetailBoster = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='images' src={imag_game} alt={imag_game} />
                </div>
                <div className='col-lg-8 position-relative'>
                    <img className='images' src={imag_boster} alt={imag_boster} />
                    <VedioButton />
                </div>
            </div>
            <div className='detaile-title'>
                <h1>FORTNITE DETAILS</h1>
            </div>
        </>
    )
}

export default DetailBoster