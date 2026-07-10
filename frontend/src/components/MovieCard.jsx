function MovieCard({ movie }) {
    function onAddToFavoritesClick() {
        alert("clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.name} />
                <div className="movie-overlay">
                    <button className="add-to-favorites-btn" onClick={onAddToFavoritesClick}>
                        Add to Favorites
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.name}</h3>
                <p>{movie.release_year}</p>
            </div>
        </div>
    )

}

export default MovieCard
