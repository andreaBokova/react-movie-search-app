import MovieCard from "../components/MovieCard";
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { "id": 1, "name": "Maurice", "release_year": 1983, "description": "lorem ipsum ate my homework" },
        { "id": 2, "name": "Shrek", "release_year": 2000, "description": "ifrickenloveshrek" }]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." className="search-input" />
            <button type="submit" className="search-button" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}>Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))}
        </div>
    </div>;
}
export default Home