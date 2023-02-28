import './LiteCard.css'

const LiteCard = (p) => {
    return (
        <div className='col'>
            <div className='LiteCard'>
                <div className='icon'>
                    <img src={p.icon} alt='' />
                </div>
                <div className='text'>
                    <h5>{p.title}</h5>
                    <p>{p.text}</p>
                </div>
            </div >
        </div >
    )
}

export default LiteCard