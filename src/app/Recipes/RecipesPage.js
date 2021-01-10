import React, { useState, useEffect } from 'react';


export default function RecipePage() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?apiKey=04bb529ced2b4ba2b8b8be40ece61824&includeNutrition=true`
        );
        const json = await response.json();
        console.log({ json });
        setResults(
          json.data.map(item => {
            return item.title;
          })
        )
      } catch (error) { }
    }
    

    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
        >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="search best recipes"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {results.map(item => (
        <h3 key={item}>{item}</h3>
      ))}
    </div>
  );
}
