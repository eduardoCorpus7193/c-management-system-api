import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">

                        <div class="alert alert-success text-left alert-dismissible fade show alert-click" role="alert">
                            <strong>Hi Edith!</strong> You have a notification. <strong><Link to="/notifications" className="nav-link home">Click if you want to see your notifications.</Link></strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <h1 className="display-4">
                                    <span className="text-primary color-welcome">Welcome</span> to the <span className="text-primary color-welcome">PLACE</span> of <span className="text-primary color-welcome">OPPORTUNITIES</span>
                                </h1>
                                <p className="lead">Universidad Tecnológica Metropolitana</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/800x300" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x200" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>*/}

                <div className="jumbotron jumbotron-fluid" id="jumbotron-offer">
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="text-center title-offer">What we offer?</h2>
                                    <p className="text-center text-offer">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt ratione ipsa minima explicabo accusamus eveniet debitis consequuntur, odit corrupti tenetur aspernatur ab laboriosam voluptatibus? Sed totam excepturi ullam fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere esse vero, exercitationem iusto laborum earum corporis repellendus, est culpa libero ab animi porro deserunt quibusdam at voluptas voluptates illum.
                                    </p>
                                    <img src="/images/designer.jpeg" className="img-fluid img-disposition" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
               <div>
                    <div className="container">
                        <div>
                            <h2 className="text-center courses-title">TALLERES CULTURALES</h2>
                        </div>
                        <div className="row">

                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div>
                            <h2 className="text-center courses-title">TALLERES DEPORTIVOS</h2>
                        </div>
                        <div className="row">

                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
