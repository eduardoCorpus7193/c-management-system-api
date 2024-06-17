import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                {/*JUMBOTRON PRINCIPAL*/}
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">

                        {/*success alert for notifications*/}
                        <div class="alert alert-success text-left alert-dismissible fade show alert-click" role="alert">
                            <div className='menssage-notification-alert'>
                                <strong>Hola Edith!</strong><span className='menssage-alert'>Tienes una notificación.</span> <strong><Link to="/notifications" className="nav-link link-style"> Da click aqui para ver tus notificaciones.</Link></strong> 
                            </div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <h1 className="display-4">
                                    <span className="text-primary color-welcome">Bienvenido </span> al <span className="text-primary color-welcome">lugar</span> de las <span className="text-primary color-welcome">oportunidades</span>
                                </h1>
                                <p className="lead">Universidad Tecnológica Metropolitana</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*JUMBOTRON OFERTA*/}
                <div className="jumbotron jumbotron-fluid" id="jumbotron-offer">
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="offerd-description">
                                    <div className='col-lg-6'>
                                        <img src="/images/designer.png" className="img-fluid img-disposition" alt="" />
                                    </div>
                                    <div className='col-lg-6'>
                                        <h2 className="title-offer">¿Que te ofrece la Universidad Metropolitana?</h2>
                                        <p className="text-offer">
                                            {/* placeholder text for offer description */}
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt ratione ipsa minima explicabo accusamus eveniet debitis consequuntur. <br/>
                                            Omnis incidunt ratione ipsa minima explicabo accusamus eveniet debitis consequuntur.
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*TALLERES CULTURALES*/}
                <div>
                    <div className="container">
                        <div>
                            <h2 className="text-center courses-title">TALLERES CULTURALES</h2>
                        </div>

                        <div className="row">
                            {/* cultural workshop cards */}
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*TALLERES DEPORTIVOS*/}
                <div>
                    <div className="container" id='sports-container'>
                        <div>
                            <h2 className="text-center courses-title">TALLERES DEPORTIVOS</h2>
                        </div>
                        <div className="row">
                            {/* sports workshop cards */}
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 cards-disposition">
                                <div className="card card-disposition">
                                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/sports" className="btn btn-primary btn-style">Go somewhere</Link>
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
