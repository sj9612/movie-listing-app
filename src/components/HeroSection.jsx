import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Pagination from './Pagination';
import FilterByName from './FilterByName';
import Cards from './Cards';
import useMovies from '../hooks/index';

function HeroSection(props) {
    const search = props.location.state ? props.location.state : 'Avengers';
    const [searchTerm, setSearchTerm] = useState(search);
    const [moviesList, setMoviesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10);
    const [movies = [], length] = useMovies(searchTerm, null, currentPage);

    useEffect(() => {
        setMoviesList(movies);
    }, [searchTerm, movies])

    if (searchTerm !== search) {
        setSearchTerm(search);
        setCurrentPage(1);
    }


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="hero-container">
            <Navbar />
            <div className="hero-content">
                <div className="hero-items">
                    <div className="hero-item-content">Search to add Movies or TV Shows to your Watch List</div>
                    <FilterByName />
                    <Cards data={moviesList} />
                    <Pagination moviesPerPage={moviesPerPage} totalMovies={length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
