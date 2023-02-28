import './Stream.css'
import { ContainerWraper, Title, LargeCard, PrimaryButton, TopStreamCard } from '../../component';
import TopStreamData, { MostPopularStreamData } from './../../sections/Data/StreamData';

const TopGame = TopStreamData.map(p => {
    return <TopStreamCard image={p.image} name={p.name} />
});

const Largecard = MostPopularStreamData.map(p => {
    return <LargeCard image={p.image} profile={p.profile} caption={p.caption} detail={p.detail} />
});

const Stream = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-8'>
                    {/* <SildeCard /> */}
                </div >
                < div className='col-lg-4' >
                    <ContainerWraper className='mt-0'>
                        <Title first="Top" last="Stream" />
                        {TopGame}
                    </ContainerWraper>
                </div >
            </div >
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

export default Stream