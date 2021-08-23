import { useEffect, useState } from 'react';
import omdb from '../api/omdb';

const useMovies = (defaultSearchTerm, id) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const search = async (SearchTerm) => {
            let params;
            if (!id) {
                params = {
                    s: SearchTerm,
                    apikey: '1bf6bc58'
                }
            } else {
                params = {
                    i: id,
                    apikey: '1bf6bc58'
                }
            }
            const response = await omdb.get('/', {
                params
            });
            if (!id) {
                setMovies(response.data.Search);
            } else {
                setMovies(response.data);
            }
        };
        search(defaultSearchTerm);
    }, [defaultSearchTerm, id]);

    return [movies];
};

export default useMovies;