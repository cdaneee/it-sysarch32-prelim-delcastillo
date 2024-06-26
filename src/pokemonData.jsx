const pokemonData = [
    {
      id: 1,
      name: {
        english: 'Bulbasaur',
        japanese: 'フシギダネ',
        chinese: '妙蛙种子',
        french: 'Bulbizarre'
      },
      type: ['Grass', 'Poison'],
      base: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        'Sp. Attack': 65,
        'Sp. Defense': 65,
        Speed: 45
      },
      image: 'https://example.com/bulbasaur.png'
    },
    {
      id: 2,
      name: {
        english: 'Ivysaur',
        japanese: 'フシギソウ',
        chinese: '妙蛙草',
        french: 'Herbizarre'
      },
      type: ['Grass', 'Poison'],
      base: {
        HP: 60,
        Attack: 62,
        Defense: 63,
        'Sp. Attack': 80,
        'Sp. Defense': 80,
        Speed: 60
      },
      image: 'https://example.com/ivysaur.png'
    },
    // Add more Pokemon data objects as needed
  ];
  
  export default pokemonData;
  