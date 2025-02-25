import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";


function App() {
  const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((response) => response.json())
    .then((data) => setListings(data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);


  return (
    <div className="app">

      <Header />
      <ListingsContainer listings={listings} />
      
    </div>
  );
}

export default App;
