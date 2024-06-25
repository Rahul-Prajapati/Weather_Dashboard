import React from 'react';

const FavoriteLocations = ({ favorites, removeFavorite }) => (
  <ul className="list-disc pl-5">
    {favorites.map((city, index) => (
      <li key={index} className="flex justify-between items-center">
        <span>{city}</span>
        <button className="text-red-500" onClick={() => removeFavorite(city)}>Remove</button>
      </li>
    ))}
  </ul>
);

export default FavoriteLocations;
