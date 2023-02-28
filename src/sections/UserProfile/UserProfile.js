import React from 'react'

import './UserProfile.css'
import { ContainerWraper, PrimaryButton, SecondaryButton, Title, VideoCard } from '../../component/index'
import profile from '../../asset/images/profile.jpg'
import VideoCardData from '../Data/VideoCardData';


const VideoCardItem = VideoCardData.map(card => {
    return <VideoCard key={card.id} imag={card.image} name={card.name} seen={card.seen} />
})

const UserProfile = () => {
    return (
        <ContainerWraper>
            <div className='row align-items-center'>
                <div className='col-lg-4'>
                    <img className='image' src={profile} alt={profile} />
                </div>
                <div className='col-lg-4 '>
                    <div className='user-info'>
                        <div><PrimaryButton>Offline</PrimaryButton></div>
                        <h5>Alan Smithee</h5>
                        <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <SecondaryButton>Start Live Stream</SecondaryButton>
                    </div>
                </div>
                <div className='col-lg-4 statistic'>
                    <ul className='statistic-content'>
                        <li>Games Downloaded <span>3</span></li>
                        <li>Friends Online <span>18</span></li>
                        <li>Live Streams <span>Non</span></li>
                        <li>Clips<span>32</span></li>
                    </ul>
                </div>
                <hr></hr>
                <Title first='Your Most Popular' last='Clips' />
                <div className='card-popular'>
                    {VideoCardItem}
                </div>
            </div>
        </ContainerWraper>
    )
}

export default UserProfile