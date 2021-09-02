import { useEffect, useState } from 'react';
import omdb from '../api/omdb';

const useMovies = (defaultSearchTerm, id, page) => {
    const [movies, setMovies] = useState([]);
    const [length, setLength] = useState();
    useEffect(() => {
        const search = async (SearchTerm, page) => {
            let params;
            if (!id) {
                params = {
                    s: SearchTerm,
                    page,
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
                setLength(response.data.totalResults);
            } else {
                setMovies(response.data);
            }
        };
        search(defaultSearchTerm, page);
    }, [defaultSearchTerm, id, page]);
    return [movies, length];
};

export default useMovies;