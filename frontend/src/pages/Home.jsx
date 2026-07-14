import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovie, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setPopularMovies(popularMovies);
      } catch (err) {
        setError("Failed to load popular movies");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {popularMovies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ),
        )}
      </div>
    </div>
  );
}
export default Home;
