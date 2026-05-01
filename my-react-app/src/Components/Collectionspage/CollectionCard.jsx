import React from "react";
import "../../assets/Css/Collections.css";


const CollectionCard = ({ item }) => {
  return (
    <div className="collection-card">
      <div className="image-wrapper">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <h5>{item.name}</h5>
        <span>{item.category}</span>
      </div>
    </div>
  );
};

export default CollectionCard;