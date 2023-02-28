import './DetailGame.css'
import { ContainerWraper, SecondaryButton } from './../../component/index';
import { FaStar, FaDownload, FaGamepad, FaServer } from "react-icons/fa";
import image1 from './../../asset/images/details-01.jpg'
import image2 from './../../asset/images/details-02.jpg'
import image3 from './../../asset/images/details-03.jpg'

const DetailGame = () => {
    return (
        <ContainerWraper>
            <div className='row'>
                <div className='col-lg-5 left-info'>
                    <div className='details'>
                        <div className="info-content">
                            <h5>Fortnite</h5>
                            <span><em className='icon'><FaStar /></em>4.8</span>
                        </div>
                        <div className="info-content">
                            <span className='studio'>Sandbox</span>
                            <span><em className='icon'><FaDownload /></em>2.3M</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 right-info'>
                    <div className='statics'>
                        <div className="static-content">
                            <span><FaStar className='icon' /></span>
                            <p>4.8</p>
                        </div>
                        <div className="static-content">
                            <span><FaDownload className='icon' /></span>
                            <p>2.5</p>
                        </div>
                        <div className="static-content">
                            <span><FaServer className='icon' /></span>
                            <p>36GB</p>
                        </div>
                        <div className="static-content">
                            <span><FaGamepad className='icon' /></span>
                            <p>Action</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-4'>
                    <img className='images' src={image1} alt={image1} />
                </div>
                <div className='col-lg-4'>
                    <img className='images' src={image2} alt={image2} />
                </div>
                <div className='col-lg-4'>
                    <img className='images' src={image3} alt={image3} />
                </div>
                <div className='description'>
                    <p>
                        Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span className='hover-text'>small contribution via PayPal</span> to info [at] templatemo.com and thank you for supporting.
                        If you want to get the PSD source files, please contact us.
                        Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
                    </p>
                    <div className='download-button'>
                        <SecondaryButton className='bt'>Download Fortnite Now</SecondaryButton>
                    </div>
                </div>
            </div>
        </ContainerWraper>
    )
}

export default DetailGame