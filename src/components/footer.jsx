import React from 'react'

function Footer() {
    return (
        <div className="footer-complet-contact">
          <div className="container">
            <div className="row distance-row">
              <div className="distans col-md-10 col-lg-8 col-xl-6 mb-md-0 mb-4">
                <div className="logotype" id="footer-logo">
                  <div>
                    <img src="images/utmaLogotype.png" width="40px" height="40px" alt="" />
                  </div>
                  <div className="nameLogotype">
                    <div className="utma">
                      TECNOLOGICA METROPOLITNA DE AGUASCALIENTES
                    </div>
                    <div className="slogan">
                      Alta Tecnologia
                    </div>
                  </div>
                </div>
                <p className="footer-text">
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </div>
              <div className="contact-disposition uper col-md-10 col-lg-8 col-xl-4 mb-md-0 mb-4">
                <h6 className="contact text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-phone me-3"></i>
                  <span className="details">Dirección:</span> 
                  <p>Av. Gerónimo de la Cueva s/n, Villas del Río, 20126 Aguascalientes, Ags.</p>
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  <span className="details">Teléfono:</span> 
                  <p>449 925 3920</p>
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  <span className="details">Horario:</span> 
                  <p>De las 8 a.m. a las 9 p.m. lun-vie</p>
                </p>
              </div>
            </div>
            <hr className="line" />
            <div className="redes">
              <div className="col-md-6 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">&copy; 2024 Company, Inc</span>
              </div>
              <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                <li>
                  <a href="https://utma.edu.mx" target="_blank">
                    <img className="utma-footer" src="images/utmaLogotype.png" alt="UTMA" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/UTMABiS/?locale=es_LA" target="_blank">
                    <img className="utma-footer" src="images/facebook.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@utmetropolitana" target="_blank">
                    <img className="utma-footer" src="images/tik.png" alt="TikTok" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="utma-footer" src="images/whatsapp.png" alt="WhatsApp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Footer;
