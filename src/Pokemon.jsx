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
        <p><b>Type:</b> {type.join(', ')}</p>
        <p><b>HP:</b> {base.HP}</p>
        <p><b>Attack:</b> {base.Attack}</p>
        <p><b>Defense:</b> {base.Defense}</p>
        <p><b>Sp. Attack:</b> {base['Sp. Attack']}</p>
        <p><b>Sp. Defense:</b> {base['Sp. Defense']}</p>
        <p><b>Speed:</b> {base.Speed}</p>
      </div>
    </div>
  );
};

export default Pokemon;
