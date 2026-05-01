import React from "react";
import "../../assets/Css/Collections.css";

const categories = ["All", "Plants", "Stones", "Hardscape", "Accessories"];

const CollectionsFilter = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div className="collections-filter-wrapper">

      {/* Category Buttons */}
      <div className="collections-filter">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="collections-search">
        <input
          type="text"
          placeholder="Search plants, stones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    </div>
  );
};

export default CollectionsFilter;