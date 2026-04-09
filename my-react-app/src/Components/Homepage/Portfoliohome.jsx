import React from 'react'

const Portfoliohome = () => {
    return (
        <>

            {/* Portfolio */}
            <section id="portfolio" className="portfolio-section py-5">
                <div className="container text-center">

                    <div className="text-center process-head">
                        <span className="values-tag" data-aos="fade-up " >[ OUR WORK ]</span>
                        <h2 className="values-title forwhite mt-3" data-aos="fade-up" >
                            Some Of Our <span>Wonderful Projects</span>
                        </h2>
                        <p className=" text-dark mb-5" data-aos="fade-up">
                            Explore how we transform ideas into stunning landscapes <br />that blend beauty, function, and lasting impact.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                title: "Modern Garden",
                                type: "Residential",
                                img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                            },
                            {
                                title: "Outdoor Living Space",
                                type: "Landscape Design",
                                img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62"
                            },
                            {
                                title: "Luxury Backyard",
                                type: "Hardscaping",
                                img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
                            }
                        ].map((item, i) => (

                            <div className="col-lg-4 col-md-6" key={i} data-aos="zoom-in">

                                <div className="portfolio-card">

                                    <img src={item.img} alt={item.title} />

                                    <div className="portfolio-overlay">
                                        <span>{item.type}</span>
                                        <h5>{item.title}</h5>
                                    </div>

                                </div>

                            </div>

                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default Portfoliohome