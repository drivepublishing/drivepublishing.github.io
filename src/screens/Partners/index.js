import React, { Component } from 'react'

const PartnerItem = ({ name, image, link, }) => {
  return (
    <li className="partner-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className="img-scale" />
        <div className="partner-overlay"></div>
        <div className="partner-name">{name}</div>
      </a>
    </li>
  );
};

export class Partners extends Component {
  static defaultProps = {
    partners: [
      {name: 'Carlin Music',                   image: 'images/par-carlin.jpg',  link: 'http://www.carlinmusic.com'},
      {name: 'Casablanca Media Publishing',    image: 'images/par-casablanca.gif',  link: 'http://www.casablancamediapublishing.com'},
      {name: 'CTM Publishing',                 image: 'images/par-ctm.png',  link: 'http://ctm.nl/publishing'},
      {name: 'David Gresham Music',            image: 'images/par-dgr.jpg',  link: 'http://www.greshamrecords.co.za'},
      {name: 'Native Tongue Music Publishing', image: 'images/par-native-tongue.jpg',  link: 'http://www.nativetongue.com.au'},
      {name: 'Nichion',                        image: 'images/par-nichion.png',  link: 'https://www.nichion.co.jp'},
      {name: 'PFive Entertainment',            image: 'images/par-pfive.png', link: 'http://pfivemexico.mx'},
      {name: 'Som Livre',                      image: 'images/par-som-livre.jpg', link: 'https://www.somlivre.com'},
      {name: 'Counterpoint Systems',           image: 'images/par-counterpoint.jpg', link: 'https://www.vistex.com/product-suites/counterpoint-suite'},
      {name: 'peermusic',                      image: 'images/peermusic.png', link: 'http://www.peermusic.com'},
    ],
  }

  render() {
    return (
      <div id="ll">
        <div
          className="drv-container partners"
          style={{backgroundImage: 'url(images/furley_bg.png)'}}>
          <div className="inner">
            <div className="header-container">
              <h2 className="section-header">Partners</h2>
            </div>
            <ul className="partners-list">
              {this.props.partners.map(x =>
                <PartnerItem
                  key={x.name}
                  image={x.image}
                  link={x.link}
                  name={x.name} />
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners
