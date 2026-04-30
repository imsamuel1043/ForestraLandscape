import React from "react";
import "../../assets/Css/Services.css";


const ServicesIntro = () => {
  return (

    <>
      <section className="services-intro py-5">
        <div className="container">

          {/* TOP TEXT AREA */}
          <div className="row mb-5">

            {/* LEFT TITLE */}
            <div className="col-lg-4">
              <h2 className="services2-title">
                DESIGNING <br />
                OUTDOOR SPACES<br />
                <span>THAT INSPIRE</span>
              </h2>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-lg-8">
              <div className="row">

                <div className="col-md-6">
                  <p className="about2-text">
                    We provide bespoke landscaping services that transform outdoor spaces into refined,
                    living experiences. Inspired by the natural richness of Wayanad, our approach blends
                    design, sustainability, and craftsmanship.
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="about2-text">

                    From elegant garden layouts to detailed maintenance and green installations,
                    every service is delivered with precision and purpose. We don’t just build
                    landscapes—we create environments that feel balanced, immersive, and enduring.

                  </p>
                </div>

              </div>
            </div>

          </div>





        </div>

      </section>
      

    </>

  );
};

export default ServicesIntro;