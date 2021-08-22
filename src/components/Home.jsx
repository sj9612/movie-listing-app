import React, { useEffect } from 'react';
import HeroSection from './HeroSection';

function Home(props) {
    console.log("props-->", props)
    useEffect(() => {
        props = null;
        return () => {
            // props = null;
        }
    })
    return (
        <div>
            <HeroSection data={props} />
        </div>
    )
}

export default Home
