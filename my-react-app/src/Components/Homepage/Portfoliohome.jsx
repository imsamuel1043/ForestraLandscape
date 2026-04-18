import React from 'react';
import "../../assets/Css/Home.css";

import work1 from "../../assets/Img/blackbamboo.jpeg";
import work2 from "../../assets/Img/goldenbamboo.jpeg";
import work3 from "../../assets/Img/ponytailpalm.jpeg";
import work4 from "../../assets/Img/whitebamboo.jpeg";

const Portfoliohome = () => {

    const items = [
        {
            title: "Home Garden",
            tags: ["Home", "Garden", "Landscape Design"],
            img: work4
        },
        {
            title: "Landscape Design",
            tags: ["Home", "Garden", "Landscape Design"],
            img: work3
        },
        {
            title: "Bamboo plants",
            tags: ["Outdoor", "Garden", "Landscape Design"],
            img: work2
        },
        {
            title: "Bamboo plants",
            tags: ["Outdoor", "Garden", "Landscape Design"],
            img: work1
        }
    ];

    return (
        <section className="portfolio-section py-5">

            <div className="container text-center">

                {/* Header */}
                <div className="process-head mb-5">
                    <span className="values-tag">[ OUR WORK ]</span>
                    <h2 className="values-title mt-3">
                        Some Of Our <span>Wonderful Projects</span>
                    </h2>
                    <p className="text-dark">
                        Explore how we transform ideas into stunning landscapes
                    </p>
                </div>

                {/* FLEX CARDS */}
                <div className="portfolio-flex">

                    {items.map((item, i) => (
                        <div className="portfolio-item" key={i}>

                            <img src={item.img} alt={item.title} />

                            {/* Overlay */}
                            <div className="portfolio-content">

                                <div className="tags">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>

                                <h5>{item.title}</h5>

                            </div>

                            {/* Arrow */}
                            <div className="arrow-btn">
                                <i className="bi bi-arrow-up-right"></i>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Portfoliohome;