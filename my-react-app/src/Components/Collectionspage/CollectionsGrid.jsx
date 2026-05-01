import React from "react";
import "../../assets/Css/Collections.css";

import CollectionCard from "./CollectionCard";

const CollectionsGrid = ({ items }) => {
  return (
    <section className="collections-grid container">
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;