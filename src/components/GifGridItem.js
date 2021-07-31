import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="grid-item">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}
