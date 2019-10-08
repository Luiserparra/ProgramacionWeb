import React from 'react';


function Footer() {
  return (
    <div id="parent">
    <footer className="page-footer blue">
      <div className="container ">
          <div className="row-fluid">
            <div className="span3">
              <h4>CONTACTENOS</h4>
              <ul className="unstyled address">
                <li>
                  <i className="icon-home"></i><strong>Dirección:</strong> Km 5, antigua Vía a Puerto Colombia
                </li>
                <li>
                  <i className="icon-envelope"></i>
                  <strong>Correo electronico: </strong> <a href="mailto:company@domain.com">company@domain.com</a>
                </li>
                <li>
                  <i className="icon-globe"></i>
                  <strong>Sitio web:</strong> <a href="http://www.domain.com">www.domain.com</a>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <strong>Telefono:</strong> 123-456-7890
                        </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="footer-copyright">
            <div className="container">
            &copy; 2019 <a target="_blank" href="#">GUEST HOUSE</a>. Todos los derechos reservados.
            </div>
          </div>
        </footer>
    </div>
    );
}

export default Footer;