import './Title.css'

function Title(p) {
    return (
        <div className="title">
            <h4>
                <span>{p.first}</span> {p.last}
            </h4>
        </div>
    )
}
function Title_center(p) {
    return (
        <div className="title text-center">
            <h4>
                <span>{p.first}</span> {p.last}
            </h4>
        </div>
    )
}

export default Title
export { Title_center }