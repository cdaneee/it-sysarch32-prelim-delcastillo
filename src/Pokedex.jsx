import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');

  const filterByLanguage = (lang) => {
    setLanguage(lang);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, language]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const { data, currentPage: fetchedCurrentPage, totalPages: fetchedTotalPages } = await response.json();
      setPokemonList(data);
      setCurrentPage(fetchedCurrentPage);
      setTotalPages(fetchedTotalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pokedex">
        <div className="language-buttons">
        <button className="button1" onClick={() => filterByLanguage('english')}>English</button>
        <button className="button2" onClick={() => filterByLanguage('japanese')}>Japanese</button>
        <button className="button3" onClick={() => filterByLanguage('chinese')}>Chinese</button>
        <button className="button4" onClick={() => filterByLanguage('french')}>French</button>
      </div>
         <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Back</button>
        {[...Array(totalPages).keys()].map((pageNum) => (
          <button key={pageNum + 1} onClick={() => setCurrentPage(pageNum + 1)} disabled={pageNum + 1 === currentPage}>{pageNum + 1}</button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      <div className="page-info">
        <p>{currentPage} out of {totalPages}</p>
      </div>
      <div className="pokemon-list">
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
     
    </div>
  );
};

export default Pokedex;
