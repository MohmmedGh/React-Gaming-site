import './Browse.css'
import icon1 from '../../asset/images/service-01.jpg'
import icon2 from '../../asset/images/service-02.jpg'
import icon3 from '../../asset/images/service-03.jpg'
import { ContainerWraper, Title, LargeCard, TitleCenter, LiteCard, PrimaryButton } from '../../component';
import TopGameCardData from './../../sections/Data/TopGameCardData';
import TopGameCard from '../../component/TopGameCard/TopGameCard'
import { MostPopularBrowseData } from '../../sections/Data/MostPopularData';

const TopGame = TopGameCardData.map(p => {
    return <TopGameCard image={p.image} name={p.name} kind={p.kind} rate={p.rate} download={p.download} />
});

const LiteData = [
    { id: 'D1', icon: icon1, title: 'Go To Your Profile', text: 'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.', },
    { id: 'D1', icon: icon2, title: 'Live Stream Button', text: 'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.', },
    { id: 'D1', icon: icon3, title: 'You Are Live', text: 'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.', },

]
const Litecard = LiteData.map(p => {
    return <LiteCard icon={p.icon} title={p.title} text={p.text} />
});

const Largecard = MostPopularBrowseData.map(p => {
    return <LargeCard image={p.image} profile={p.profile} caption={p.caption} detail={p.detail} />
});

const Browse = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-7'>
                    {/* <SildeCard /> */}
                </div >
                < div className='col-lg-5' >
                    <ContainerWraper className='mt-0'>
                        <Title first="Top" last="Downloaded" />
                        {TopGame}
                    </ContainerWraper>
                </div >
            </div >
            <div className='row mt-5'>
                <TitleCenter first="How To Start Your" last="Live Stream" />
                {Litecard}
                <div className='mt-5 text-center'>
                    <PrimaryButton>
                        Go To Profile
                    </PrimaryButton>
                </div>
            </div>
            <div className='row'>
                <ContainerWraper >
                    <Title first="Most Popular " last="Live Stream" />
                    <div className='row'>
                        {Largecard}
                        <div className='brows-btn'>
                            <PrimaryButton>
                                Descover AllStream
                            </PrimaryButton>
                        </div>
                    </div>
                </ContainerWraper>
            </div>
        </div >
    )
}

export default Browse