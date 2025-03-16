const data = [
    {
        name: "Interstellar",
        director: "Christopher Nolan",
        year: "2014",
        rank: "S"
    },
    {
        name: "La La Land",
        director: "Damien Chazelle",
        year: "2016",
        rank: "S"
    },
    {
        name: "The Sound of Music",
        director: "Robert Wise",
        year: "1965",
        rank: "A"
    },
    {
        name: "The Marksman",
        director: "Robert Lorenz",
        year: "2021",
        rank: "B"
    },
    {
        name: "28 Days Later",
        director: "Danny Boyle",
        year: "2002",
        rank: "C"
    },
    {
        name: "Eternals",
        director: "Chloé Zhao",
        year: "2021",
        rank: "D"
    },
    {
        name: "Green Lantern",
        director: "Martin Campbell",
        year: "2011",
        rank: "E"
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