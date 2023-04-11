import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const fetch_data = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setResult(data.results);
  };

  useEffect(() => {
    fetch_data(APIURL); // Load initial data without search
  }, []);

  useEffect(() => {
    if (query !== "") {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;
      fetch_data(searchUrl);
    } else {
      fetch_data(APIURL);
    }
  }, [query]);

  return (
    <div className="main">
      <div className="row">
        <input
          type="search"
          id="search"
          value={query}
          autoFocus
          autoComplete="off"
          onChange={handleSearch}
          placeholder="Search here..."
        />
      </div>
      <div className="row" id="movie-box">
        {result &&
          result.map((item, index) => {
            return (
              <Movie
                title={item.original_title}
                url={item.poster_path}
                key={index}
                overview={item.overview}
                ratings={item.vote_average}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
