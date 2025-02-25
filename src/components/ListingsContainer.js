import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch the listings from the backend when the component mounts
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  const handleDelete = (id) => {
    setListings(prevListings => prevListings.filter(listing => listing.id !== id));
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            image={listing.image}
            description={listing.description}
            location={listing.location}
            onDelete={handleDelete} // Pass the delete handler to the ListingCard
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

