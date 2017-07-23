import React, { Component } from 'react';

const PUBLIC_PATH = 'public';

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
                  <div className="contact-item__icon">
                    <a href="mailto:aruiz@drivepublishing.com">
                      <img
                        style={{width: '35px'}}
                        src={`${PUBLIC_PATH}/images/mail-icon.svg`}
                        alt="Email" />
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-item__title">Joe Rausch</div>
                  <div className="contact-item__icon">
                    <a href="mailto:jrausch@drivepublishing.com">
                      <img
                        style={{width: '35px'}}
                        src={`${PUBLIC_PATH}/images/mail-icon.svg`}
                        alt="Email" />
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-item__title">General</div>
                  <div className="contact-item__icon">
                    <a href="mailto:info@drivepublishing.com">
                      <img
                        style={{width: '35px'}}
                        src={`${PUBLIC_PATH}/images/mail-icon.svg`}
                        alt="Email" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-address">
              <div className="contact-address__title">Office Location</div>
              <div className="contact-address__item">Drive Music Publishing</div>
              <div className="contact-address__item">12650 Riverside Drive, Ste. 200</div>
              <div className="contact-address__item">Studio City, California 91607</div>
              <div className="contact-address__image">
                <img
                  src={`${PUBLIC_PATH}/images/drv-transparent.png`}
                  className="img-scale"
                  alt="Drive logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="drv-container footer">
          <div className="row">
            <div className="col-lg-12 col-xs-12 text-center">
              <p className="cr">{`Copyright ${new Date().getFullYear()} © Drive Music Publishing | All Rights Reserved`}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;
