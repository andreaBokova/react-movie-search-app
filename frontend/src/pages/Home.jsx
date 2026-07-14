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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
 

    try {
      const searchResults = await searchMovie(searchQuery);
      setPopularMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to search movie");
      console.log(err);
    } finally {
      setLoading(false);
      setSearchQuery("")
    }
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
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : popularMovies.length === 0 ? (
        <div className="no-results">No results found</div>
      ) : (
        <div className="movies-grid">
          {popularMovies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              ),
          )}
        </div>
      )}
    </div>
  );
}
export default Home;
