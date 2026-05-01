import React from "react";
import "../../assets/Css/Collections.css";

import collectionshero from "../../assets/Img/collectionshero.jpg";


const CollectionsHero = () => {
  return (

    <section
            className="services-hero"
            style={{ backgroundImage: `url(${collectionshero})` }}
          >
            <div className="services-overlay"></div>
    
            <div className="container">
              <div className="services-hero-content">
    
                <p className="services-breadcrumb">
                  Home <span>|</span> Collection
                </p>
    
                <h2 className="services-hero-title">
                  OUR COLLECTIONS
                </h2>
    
              </div>
            </div>
          </section>

    // <section className="collections-hero">
    //   <div className="overlay">
    //     <h1>Our Collections</h1>
    //     <p>Curated elements to elevate your outdoor spaces</p>
    //   </div>
    // </section>
  );
};

export default CollectionsHero;