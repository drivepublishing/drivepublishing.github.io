import React, { Component } from 'react';
import logo from '../static/images/drv-transparent.png';

export class Footer extends Component {

  render() {
    return (
      <div>
        <div className="drv-container" id="contact">
          <div className="contact">
            <div className="contact-links">
              <ul className="contact-items">
                <li className="contact-item">
                  <div className="contact-item__title">Ana Ruiz</div>
                  <div className="contact-item__icon"><a href="mailto:aruiz@drivepublishing.com"><span className="fa fa-envelope"></span></a></div>
                </li>
                <li className="contact-item">
                  <div className="contact-item__title">Joe Rausch</div>
                  <div className="contact-item__icon"><a href="mailto:jrausch@drivepublishing.com"><span className="fa fa-envelope"></span></a></div>
                </li>
                <li className="contact-item">
                  <div className="contact-item__title">General</div>
                  <div className="contact-item__icon"><a href="mailto:info@drivepublishing.com"><span className="fa fa-envelope"></span></a></div>
                </li>
              </ul>
            </div>
            <div className="contact-address">
              <div className="contact-address__title">Office Location</div>
              <div className="contact-address__item">Drive Music Publishing</div>
              <div className="contact-address__item">12650 Riverside Drive, Ste. 200</div>
              <div className="contact-address__item">Studio City, California 91607</div>
              <div className="contact-address__image"><img src={logo} className="img-scale" alt="Drive logo" /></div>
            </div>
          </div>
        </div>

        <div className="drv-container footer">
          <div className="row">
            <div className="col-lg-12 col-xs-12 text-center">
              <p className="cr"></p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;
