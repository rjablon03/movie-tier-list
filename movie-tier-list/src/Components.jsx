import { useState } from "react"

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
    const [movies, setMovies] = useState(data)

    return (
        <>
            <div className="container">
                {["S", "A", "B", "C", "D", "E"].map(rank => (
                    <Category key={rank} label={rank} movies={movies} />
                ))}
            </div>
            <CreateCard setMovies={setMovies} />
        </>
    );
}

function Category({ label, movies }) {
    const rankedMovies = movies.filter(movie => movie.rank === label);

    return (
        <div className="category-container">
            <div className={"label label-" + label}>{label}</div>
            <div className="items">
                {rankedMovies.map((movie, index) => (
                    <MovieCard key={index} name={movie.name} director={movie.director} year={movie.year} />
                ))}
            </div>
        </div>
    );
}

function MovieCard(props) {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.director}</p>
            <p>{props.year}</p>
            <button>Edit</button>
        </div>
    )
}

function CreateCard({setMovies}) {
    const create = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const newMovie = {
            name: formData.get("name"),
            director: formData.get("director"),
            year: formData.get("year"),
            rank: formData.get("rank")
        };
    
        setMovies(prevMovies => [...prevMovies, newMovie]);
    
        event.target.reset();
    };
    

    return (
        <div className="create-form">
            <form onSubmit={create}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="director">Director</label>
                <input type="text" name="director" id="director" />

                <label htmlFor="year">Year</label>
                <input type="number" name="year" id="year" />

                <label htmlFor="rank">Rank</label>
                <select name="rank" id="rank">
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>

                <button type="submit" id="submit">Create</button>
            </form>
        </div>
    )
}

export { Container }