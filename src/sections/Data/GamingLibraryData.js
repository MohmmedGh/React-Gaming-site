
import game1 from '../../asset/images/game-01.jpg'
import game2 from '../../asset/images/game-02.jpg'
import game3 from '../../asset/images/game-03.jpg'


const GamingLibraryData = [
    { id: 'G1', image: game1, name: 'Fortnite', kind: 'Sandbox', date: '24/08/2030', hour: '344 H 07 Mins', download: 'Downloaded' },
    { id: 'G2', image: game2, name: 'PubG', kind: 'Battle', date: '20/07/2036', hour: '756 H 22 Mins', download: 'Downloaded' },
    { id: 'G3', image: game3, name: 'Fortnite', kind: 'Legendary', date: '3/04/2025', hour: '856 H 30 Mins', download: 'Downloaded' },
]

const RelatedGameData = [
    { id: 'G1', image: game1, name: 'Fortnite', studio: 'Sandbox', rate: '4.5', download: '2.6M' },
    { id: 'G2', image: game2, name: 'PubG', studio: 'Battle', rate: '2.8', download: '1.9M' },
    { id: 'G3', image: game3, name: 'Fortnite', studio: 'Legendary', rate: '5.0', download: '5.1K' },
    { id: 'G4', image: game1, name: 'Dota', studio: 'Sandbox', rate: '4.7', download: '3.6M' },
    { id: 'G5', image: game2, name: 'PubG', studio: 'Battle', rate: '3.8', download: '2.9M' },
    { id: 'G6', image: game3, name: 'GTA', studio: 'Legendary', rate: '4.5', download: '5.1M' },
]

export default GamingLibraryData
export { RelatedGameData }

