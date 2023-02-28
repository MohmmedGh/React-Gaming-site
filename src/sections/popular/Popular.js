import './Popular.css'
import { Card, Title, ContainerWraper } from './../../component/index';
import MostPopularData from '../Data/MostPopularData';

const MostPuplarItem = MostPopularData.map(card => {
    return <Card key={card.id} imag={card.image} name={card.name} kind={card.kind} rate={card.rate} download={card.download} />

})

function Popular() {
    return (
        <>
            <ContainerWraper>
                <Title first='Most Popular' last='Right Now' />
                <div className='card-popular'>
                    {MostPuplarItem}

                </div>
            </ContainerWraper>
        </>
    )
}

export default Popular