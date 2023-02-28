import './RelatedGame'
import { ContainerWraper, RelatedGameCard, Title } from '../../component'
import { RelatedGameData } from '../Data/GamingLibraryData'

const relatedgame = RelatedGameData.map(card => {
  return <RelatedGameCard image={card.image} name={card.name} studio={card.studio} rate={card.rate} download={card.download} />
})

const RelatedGame = () => {
  return (
    <ContainerWraper>
      <Title first='Other Related ' last='Games' />
      <div className='row'>

        {relatedgame}
      </div>
    </ContainerWraper>
  )
}

export default RelatedGame