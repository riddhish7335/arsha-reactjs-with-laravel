import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import About from '../Layouts/Partials/About'

const Home = () => {
    return (
        <>
             
            <section id="hero" className="d-flex align-items-center" style={ { height: "auto" }}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">


                <section id="clients" className="clients section-bg">
                    <div className="container">

                        <div className="row" data-aos="zoom-in">

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>


                </section>

                <About />
            </main> 
        </>

    )
}

export default Home