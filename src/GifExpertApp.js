import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  return (
    <>
      <div className="top-container">
        <h2>¡Buscá tu GIF!</h2>
        <AddCategory setCategories={setCategories} />
      </div>
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>);
}