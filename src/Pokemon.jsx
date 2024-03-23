import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;

  const getNameByLanguage = () => {
    switch (language) {
      case 'japanese':
        return name.japanese;
      case 'chinese':
        return name.chinese;
      case 'french':
        return name.french;
      default:
        return name.english;
    }
  };

  return (
    <div className="pokemon-card">
      <img src={image} alt={getNameByLanguage()} />
      <div>
        <p><b>ID:</b> {id}</p>
        <p><b>Name:</b> {getNameByLanguage()}</p>
        
      </div>
    </div>
  );
};

export default Pokemon;
