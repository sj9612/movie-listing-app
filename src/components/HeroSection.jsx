import React from 'react';
import Navbar from './Navbar';
import FilterByName from './FilterByName';
import Cards from './Cards';
import useMovies from '../hooks/index';

function HeroSection(props) {
    console.log("data-->", props)
    const searchTerm = props.location.state ? props.location.state : 'Avengers';
    console.log("search-->", searchTerm)
    const [movies] = useMovies(searchTerm);
    console.log("movies-->", movies)
    return (
        <div className="hero-container">
            <Navbar />
            <div className="hero-content">
                <div className="hero-items">
                    <div className="hero-item-content">Search to add Movies or TV Shows to your Watch List</div>
                    {/* <FilterByName /> */}
                    <Cards data={movies} />
                </div>

            </div>
        </div>
    )
}

export default HeroSection
