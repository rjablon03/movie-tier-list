const data = [
    {
        name: "Interstellar"
    }
]

function Container() {
    return (
        <>
            <div className="container">
                <Category label="S"/>
                <Category label="A"/>
                <Category label="B"/>
                <Category label="C"/>
                <Category label="D"/>
                <Category label="E"/>
            </div>
        </>
    )
}

// Category container so that the label is it's own thing and then to the right of it is the container for the items???
function Category(props) {
    return (
        <div className="category-container">
            <div className={"label label-" + props.label}>{props.label}</div>
            <div className="items">

            </div>
        </div>
    )
}

export { Container }