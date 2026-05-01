import React from "react";
import "../../assets/Css/Collections.css";


const FeaturedCollection = () => {
  return (
    <section className="featured-collection container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="/images/featured.jpg" alt="Featured" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Premium Selections</h2>
          <p>
            Handpicked plants and materials designed to bring elegance and
            balance to your outdoor environment.
          </p>
          <button className="btn btn-dark">View Details</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;