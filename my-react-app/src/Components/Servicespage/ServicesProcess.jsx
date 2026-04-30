import React from "react";
import "../../assets/Css/Services.css";

const ServicesProcess = () => {
  const steps = [
    "Consultation",
    "Design Planning",
    "Execution",
    "Final Delivery"
  ];

  return (
    <section className="process-section py-5">
      <div className="container text-center">

        <h2 className="process-title">OUR PROCESS</h2>

        <div className="row mt-5">
          {steps.map((step, i) => (
            <div className="col-md-3" key={i}>
              <div className="process-card">
                <span>0{i + 1}</span>
                <h5>{step}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesProcess;