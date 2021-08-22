import React from 'react';
import Header from './Header';
import useMovies from '../hooks/index';

function Details(props) {
    const [movies] = useMovies(null, props.history.location.state.imdbID);
    return (
        <div>
            <Header />
            <div className="details-container">
                <div className="details-image-container">
                    <img src={movies.Poster} alt="Poster" className="details-img" />
                </div>
                <div className="details-image-1"></div>
                <div className="details-image-2"></div>
                <div className="details-content">
                    <div className="details-title">{movies.Title}</div>
                    <div className="details-plot">{movies.Plot}</div>
                    <div className="details-footer-screen">
                        <div className="details-movie-rating">
                            IMDb {movies.imdbRating}
                        </div>
                        <div className="details-movie-runtime">
                            {movies.Runtime}
                        </div>
                        <div className="details-movie-release-year">
                            {movies.Year}
                        </div>
                    </div>
                    <div className="details-people">
                        <div className="details-people-heading">Director</div>
                        <div className="details-people-val">{movies.Director}</div>
                        <div className="details-people-heading">Starring</div>
                        <div className="details-people-val">{movies.Actors}</div>
                        <div className="details-people-heading">Genres</div>
                        <div className="details-people-val">{movies.Genre}</div>
                        <div className="details-people-heading">Languages</div>
                        <div className="details-people-val">{movies.Language}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
