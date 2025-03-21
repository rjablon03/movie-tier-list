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
    const [movies, setMovies] = useState(data.map((movie, index) => ({...movie, id: movie.name + toString(index)})));

    return (
        <>
            <div className="container">
                {["S", "A", "B", "C", "D", "E"].map(rank => (
                    <Category key={rank} label={rank} movies={movies} setMovies={setMovies}/>
                ))}
            </div>
            <CreateCard movies={movies} setMovies={setMovies} />
        </>
    );
}

function Category({ label, movies, setMovies }) {
    const filteredMovies = movies.filter(movie => movie.rank === label);

    return (
        <div className="category-container">
            <div className={"label label-" + label}>{label}</div>
            <div className="items">
                {filteredMovies.map((movie) => (
                    <MovieCard
                        key={movie.name}
                        id={movie.id}
                        name={movie.name}
                        director={movie.director}
                        year={movie.year}
                        setMovies={setMovies}
                    />
                ))}
            </div>
        </div>
    );
}

function MovieCard({ id, name, director, year, setMovies }) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newDirector, setNewDirector] = useState(director);
    const [newYear, setNewYear] = useState(year);

    const deleteCard = () => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    const saveChanges = () => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id ? { ...movie, name: newName, director: newDirector, year: newYear } : movie
            )
        );
        setEditing(false);
    };

    return (
        <div className="card">
            {editing ? (
                <>
                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <input type="text" value={newDirector} onChange={(e) => setNewDirector(e.target.value)} />
                    <input type="text" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
                    <button className="other-btns" onClick={saveChanges}>Save</button>
                    <button className="other-btns" onClick={() => setEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <p>{name}</p>
                    <p>{director}</p>
                    <p>{year}</p>
                    <button className="other-btns" id="edit" onClick={() => setEditing(true)}>Edit</button>
                    <button className="other-btns" onClick={deleteCard}>Delete</button>
                </>
            )}
        </div>
    );
}

function CreateCard({movies, setMovies}) {
    const create = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const newMovie = {
            id: movies.length,
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