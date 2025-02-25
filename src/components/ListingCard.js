import React from "react";
import { useState } from "react";

function ListingCard({ id, image, description, location, onDelete }) {
  const [isFavorite, setFavorite] = useState(false)
  const [isVisible, setVisible] = useState(true);
 


  const HandleClick = () => {
      setFavorite(prevState => !prevState)
   
  }
  const handleDeleteClick = () => {
    // Make a DELETE request to the backend
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Listing deleted successfully");
          setVisible(false); // Hide the card after successful deletion
          if (onDelete) {
            onDelete(id); // Call the parent delete handler
          }
        } else {
          console.error("Failed to delete the listing");
        }
      })
      .catch((error) => {
        console.error("Error deleting the listing:", error);
      });
  };

  if (!isVisible) return null; 
  
  return (
    <li className="card">
      <div className="image" >
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div onClick={HandleClick} className="details"> 
        { isFavorite ? (
          <button  
           className="emoji-button favorite active">★</button>
        ) : (
          <button   
          className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
       
            <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
        
      </div>
    </li>
  );
}

export default ListingCard;
