import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorites yet..</h2>
        <p>Your favorite movies will be displayed here</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your favorite movies</h1>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
