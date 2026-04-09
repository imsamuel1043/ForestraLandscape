import React, { useEffect, useState } from "react";

import Select from "react-select";
import "../../assets/Css/Home.css";

import process1 from "../../assets/Img/process1.jpg";
import process2 from  "../../assets/Img/process2.jpg";
import process3 from "../../assets/Img/process3.jpg";
import process4 from "../../assets/Img/process4.jpg";



const options = [
    { value: "All", label: "All" },
    { value: "Plant", label: "Plants" },
    { value: "Tree", label: "Trees" },
    { value: "Stone", label: "Stones" },
    { value: "Hardscape", label: "Hardscaping" },
    { value: "Decor", label: "Decor" },
    { value: "Indoor", label: "Indoor" },
    { value: "Outdoor", label: "Outdoor" },
];

const plants = [
    { id: 1, name: "Areca Palm", price: 25, img: "...", type: "Plant", },
    { id: 2, name: "Granite Stone", price: 40, img: "...", type: "Stone", place: "Outdoor" },
];

const Processhome = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");


    const filteredPlants = plants.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            filter === "All" ||
            p.type === filter ||
            p.place === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <>

            <div className="dark-surface ">
                {/* Process */}
                <section className="process-section mt-5 mb-3 py-5">
                    <div className="container mt-3">

                        <div className="text-center process-head">
                            <span className="values-tag" data-aos="fade-up " >[ OUR PROCESS ]</span>
                            <h2 className="values-title fordark mt-3" data-aos="fade-up" >
                                From Vision To <span>Reality, Step By Step</span>
                            </h2>
                            <p className="section-subtitle mb-5" data-aos="fade-up">
                                We follow a clear and collaborative approach to transform ideas into <br />beautifully crafted spaces with precision and care.
                            </p>
                        </div>


                        <div className="row g-4 process-grid" data-aos="fade-up">
                            {[
                                {
                                    title: "Consultation",
                                    desc: "We understand your vision and requirements.",
                                    icon: "bi-chat-dots",
                                    img: process4
                                },
                                {
                                    title: "Design",
                                    desc: "We craft a custom landscape plan.",
                                    icon: "bi-pencil-square",
                                    img: process3
                                },
                                {
                                    title: "Installation",
                                    desc: "Our team brings the design to life.",
                                    icon: "bi-tools",
                                    img: process1
                                },
                                {
                                    title: "Maintenance",
                                    desc: "We ensure long-term beauty and care.",
                                    icon: "bi-flower1",
                                    img: process2
                                }
                            ].map((step, i) => (

                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="process-img-card">

                                        {/* Background Image */}
                                        <img src={step.img} alt={step.title} />

                                        {/* Overlay Content */}
                                        <div className="process-overlay">

                                            <div className="process-icon">
                                                <i className={`bi ${step.icon}`}></i>
                                            </div>

                                            <h5>{step.title}</h5>
                                            <p>{step.desc}</p>

                                            <button className="process-btn">
                                                <i className="bi bi-plus"></i>
                                            </button>

                                        </div>

                                    </div>
                                </div>

                            ))}
                        </div>


                    </div>
                </section>

                
            </div>

        </>
    )
}

export default Processhome