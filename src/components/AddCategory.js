import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [input, setinput] = useState('');


    const handleInputChange = (e) => {
        setinput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setCategories(cats => [input, ...cats]);
            setinput('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={ handleSubmit }>Buscar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
