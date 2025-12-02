
function Square(props) {
    return (
        <div onClick={props.handleOnclcick} className="block">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Square