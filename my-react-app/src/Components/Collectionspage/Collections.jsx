import React, { useState } from "react";
import "../../assets/Css/Collections.css";



import CollectionsHero from "./CollectionsHero";
import CollectionsFilter from "./CollectionsFilter";
// import FeaturedCollection from "./FeaturedCollection";
import CollectionsGrid from "./CollectionsGrid";
import CollectionsCTA from "./CollectionsCTA";

const Collections = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const data = [
        { id: 1, name: "Areca Palm", category: "Plants", image: "/images/plant1.jpg" },
        { id: 2, name: "Granite Stone", category: "Stones", image: "/images/stone1.jpg" },
        { id: 3, name: "Concrete Paver", category: "Hardscape", image: "/images/paver1.jpg" },
        { id: 4, name: "Ceramic Pot", category: "Accessories", image: "/images/pot1.jpg" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter(item => {
        const matchesCategory =
            activeCategory === "All" || item.category === activeCategory;

        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <CollectionsHero />

            <CollectionsFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* <FeaturedCollection /> */}

            <CollectionsGrid items={filteredData} />

            <CollectionsCTA />
        </>
    );
};

export default Collections;