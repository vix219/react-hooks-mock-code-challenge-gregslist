import React from "react";
import Search from "./Search";
import { useState, useEffect } from 'react';

function Header({setListings}) {

  useEffect(() => {
      // Fetch the listings from the backend when the component mounts
      fetch('http://localhost:6001/listings')
        .then(response => response.json())
        .then(data => setListings(data))
        .catch(error => console.error('Error fetching listings:', error));
    }, []);

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search />
    </header>
  );
}

export default Header;
