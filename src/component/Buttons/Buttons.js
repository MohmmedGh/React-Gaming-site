import './Buttons.css'
import { FaPlay } from "react-icons/fa";

const PrimaryButton = (props) => {
    return (
        <div >
            <a className='butt primary-btn' href='/#'>{props.children}</a>
        </div>
    )
}
const PrimaryButton_Sm = (props) => {
    return (
        <div>
            <a className='butt primary-btn butt-sm' href='/#'>{props.children}</a>
        </div>
    )
}

const SecondButton = (props) => {
    return (
        <button className='butt secondary-btn '>
            <a href='/#'>{props.children}</a>
        </button>
    )
}

const V_button = () => {
    return (

        <div className='vedio-btn'>
            <a href='/#' className=''><FaPlay /></a>
        </div>
    )
}

const R_button = (props) => {
    return (
        <div className='btn rounded-btn'>
            <a href='/#' className=''>{props.children}</a>
        </div>
    )
}

export default PrimaryButton
export { SecondButton }
export { PrimaryButton_Sm }
export { V_button }
export { R_button }