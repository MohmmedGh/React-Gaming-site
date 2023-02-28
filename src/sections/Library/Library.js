import './Library.css'
import { ContainerWraper, Title, GamingLibraryCard } from '../../component/index'
import GamingLibraryData from './../Data/GamingLibraryData';

const GamingCard = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} imag={card.image} name={card.name} kind={card.kind} date={card.date} hour={card.hour} download={card.download} />

})

const Library = () => {
    return (
        <>
            <ContainerWraper>
                <Title first='Your Gaming' last='Library' />
                <div className='component'>
                    {GamingCard}
                </div>
            </ContainerWraper>
        </>
    )
}

export default Library