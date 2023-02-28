import './Hero.css'
import PrimaryButton from './../../component/Buttons/Buttons';

const Hero = () => {
    return (
        <div className='main-hero'>
            <div className='content'>
                <div className='title'>
                    <h5>Welcomr To Cyborg</h5>
                </div>
                <div className='sub-title'>
                    <h3> <span>Browse</span> our pupular games here</h3>
                </div>
                <PrimaryButton>Browse Now</PrimaryButton>
            </div>
        </div>
    )
}

export default Hero