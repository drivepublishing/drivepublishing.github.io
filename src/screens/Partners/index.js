import React, { Component } from 'react'
import p1 from '../../static/images/par-because.jpg';
import p2 from '../../static/images/par-carlin.jpg';
import p3 from '../../static/images/par-casablanca.gif';
import p4 from '../../static/images/par-clippers.jpg';
import p5 from '../../static/images/par-ctm.png';
import p6 from '../../static/images/par-dgr.jpg';
import p7 from '../../static/images/par-edizioni-curci.jpg';
import p8 from '../../static/images/par-native-tongue.jpg';
import p9 from '../../static/images/par-nichion.png';
import p10 from '../../static/images/par-pfive.png';
import p11 from '../../static/images/par-som-livre.jpg';
import p12 from '../../static/images/par-counterpoint.jpg';

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
      {name: 'Because Editions',               image: p1,  link: 'http://www.becausegroup.tv'},
      {name: 'Carlin Music',                   image: p2,  link: 'http://www.carlinmusic.com'},
      {name: 'Casablanca Media Publishing',    image: p3,  link: 'http://www.casablancamediapublishing.com'},
      {name: 'Ediciones Musicales Clipper\'s', image: p4,  link: 'http://www.edicionesmusicalesclippers.org'},
      {name: 'CTM Publishing',                 image: p5,  link: 'http://ctm.nl/publishing'},
      {name: 'David Gresham Music',            image: p6,  link: 'http://www.greshamrecords.co.za'},
      {name: 'Edizioni Curci Publishing',      image: p7,  link: 'http://www.edizionicurci.it'},
      {name: 'Native Tongue Music Publishing', image: p8,  link: 'http://www.nativetongue.com.au'},
      {name: 'Nichion',                        image: p9,  link: 'https://www.nichion.co.jp'},
      {name: 'PFive Entertainment',            image: p10, link: 'http://pfivemexico.mx'},
      {name: 'Som Livre',                      image: p11, link: 'https://www.somlivre.com'},
      {name: 'Counterpoint Systems',           image: p12, link: 'https://www.vistex.com/product-suites/counterpoint-suite'},
    ],
  }

  render() {
    return (
      <div id="ll">
        <div className="drv-container partners">
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
