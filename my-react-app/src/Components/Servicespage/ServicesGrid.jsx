import React, { useEffect, useState } from "react";
import "../../assets/Css/Services.css";

// import img1 from "../../assets/Img/img1.jpg";
// import img2 from "../../assets/Img/img2.jpg";
// import img3 from "../../assets/Img/img3.jpg";
// import img4 from "../../assets/Img/img4.jpg";
// import img5 from "../../assets/Img/img5.jpg";

// const images = [img1, img2, img3, img4, img5];

const ServicesGrid = () => {
  const [index, setIndex] = useState(0);

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-hero1">
      <div className="container text-center">

        <h1 className="title">
          Landscape <span>Services</span>
        </h1>

        <p className="subtitle">
          Designing serene, living spaces inspired by nature.
        </p>

        {/*  */}

        {/* <div className="image-stack">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`stack-img ${
                i === index ? "active" : ""
              }`}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default ServicesGrid;