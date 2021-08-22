import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMovies from '../hooks/index';
import { useHistory } from 'react-router-dom';

function FilterByName() {
    const history = useHistory();
    const [option, setOption] = useState('');
    const [movies = []] = useMovies(option);
    const [searchTerm, setSearchTerm] = useState(null);

    const getChangeValue = (event, value, reason) => {
        setSearchTerm(value);
        setOption(value);
    }

    const getSelectedValue = (event, value) => {
        if (typeof value === 'string' || !value) return;
        history.push('/details', value)
    };

    const getKeyPress = (event) => {
        if (event.keyCode === 13) {
            history.push('/', searchTerm);
        } else {
            return;
        }
    }

    return (
        <div className="status-filter">
            <Autocomplete
                id="searchbox"
                options={movies}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                freeSolo
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.Title;
                }}
                onInputChange={getChangeValue}
                onChange={getSelectedValue}
                className="search-box"
                renderInput={(params) => <TextField {...params} onKeyUp={getKeyPress} label="Search for a movie or TV show..." variant="outlined" />}
            />
        </div>
    );
}

export default FilterByName


