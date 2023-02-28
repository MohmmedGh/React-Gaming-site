import './ContainerWraper.css'

const ContainerWraper = (props) => {
    return (
        <div className='ContainerWraper'>
            {props.children}
        </div>
    )
}

export default ContainerWraper