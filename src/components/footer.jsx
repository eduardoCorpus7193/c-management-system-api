import React from 'react'

function Footer() {
    return (
        <div className="footer-complet-contact">
          {/* BLOQUE PRINCIPAL DE CONTENIDO DEL PIE DE PÁGINA */}
          <div className="container">
            {/* FILA PRINCIPAL DEL PIE DE PÁGINA */}
            <div className="row distance-row">
              {/* COLUMNA CON LOGOTIPO Y TEXTO DEL PIE DE PÁGINA */}
              <div className="distans col-md-10 col-lg-8 col-xl-6 mb-md-0 mb-4">
                <div className="logotype" id="footer-logo">
                  <div>
                    <img src="images/utmaLogotype.png" width="40px" height="40px" alt="" /> {/* logo image */}
                  </div>
                  <div className="nameLogotype">
                    <div className="utma">
                      TECNOLOGICA METROPOLITNA DE AGUASCALIENTES
                    </div>
                    <div className="slogan">
                      Alta Tecnologia {/* slogan */}
                    </div>
                  </div>
                </div>
                <p className="footer-text">
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. {/* footer text */}
                </p>
              </div>
              {/* COLUMNA CON INFORMACIÓN DE CONTACTO */}
              <div className="contact-disposition uper col-md-10 col-lg-8 col-xl-4 mb-md-0 mb-4">
                <h6 className="contact text-uppercase fw-bold mb-4">Contacto</h6> {/* contact title */}
                <p>
                  <i className="fas fa-phone me-3"></i>
                  <span className="details">Dirección:</span> 
                  <p>Av. Gerónimo de la Cueva s/n, Villas del Río, 20126 Aguascalientes, Ags.</p> {/* address */}
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  <span className="details">Teléfono:</span> 
                  <p>449 925 3920</p> {/* phone number */}
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  <span className="details">Horario:</span> 
                  <p>De las 8 a.m. a las 9 p.m. lun-vie</p> {/* opening hours */}
                </p>
              </div>
            </div>
            <hr className="line" /> {/* horizontal line */}
            {/* BLOQUE CON REDES SOCIALES Y COPYRIGHT */}
            <div className="redes">
              <div className="col-md-6 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">&copy; 2024 Company, Inc</span> {/* copyright */}
              </div>
              <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                <li>
                  <a href="https://utma.edu.mx" target="blank">
                    <img className="utma-footer" src="images/utmaLogotype.png" alt="UTMA" /> {/* UTMA logo link */}
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/UTMABiS/?locale=es_LA" target="blank">
                    <img className="utma-footer" src="images/facebook.png" alt="Facebook" /> {/* Facebook link */}
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@utmetropolitana" target="blank">
                    <img className="utma-footer" src="images/tik.png" alt="TikTok" /> {/* TikTok link */}
                  </a>
                </li>
                <li>
                  <a href="#!" target="blank">
                    <img className="utma-footer" src="images/whatsapp.png" alt="WhatsApp" /> {/* WhatsApp link */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Footer;

