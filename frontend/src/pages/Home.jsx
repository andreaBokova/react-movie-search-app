import MovieCard from "../components/MovieCard";
function Home() {
    const movies = [
        { "id": 1, "name": "Maurice", "release_year": 1983, "description": "lorem ipsum ate my homework" },
        { "id": 2, "name": "Shrek", "release_year": 2000, "description": "ifrickenloveshrek" }]

    return <div className="home">

        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))}
        </div>
    </div>;
}
export default Home