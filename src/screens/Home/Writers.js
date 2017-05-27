import React, { Component } from 'react'
import w1 from '../../static/images/client-jb.jpg';
import w2 from '../../static/images/client-black-tibetans.png';
import w3 from '../../static/images/client-marshall-tucker.png';
import w4 from '../../static/images/client-joel-rafael.png';
import w5 from '../../static/images/client-bellflower.png';
import w6 from '../../static/images/client-jesse-michaels.png';
import w7 from '../../static/images/client-dean-micetich.png';
import w8 from '../../static/images/client-john-trudell.jpg';
import w9 from '../../static/images/client-lance-canales.jpg';
import w10 from '../../static/images/client-blue-october.png';
import w11 from '../../static/images/client-mark-lanegan.png';
import w12 from '../../static/images/client-chet-lyster.jpg';
import drv from '../../static/images/drv-md.png';

const WriterItem = ({ image, link, name, style }) => {
  return (
    <li className="client-item" style={style}>
      <a href={link} target={link && '_blank'} rel="noopener noreferrer">
        <img src={image} alt={name || 'Golden Retriever'} />
        {name && <div className="client-item__overlay"></div>}
        {name && <div className="client-item__info">{name}</div>}
      </a>
    </li>
  );
};

export class Writers extends Component {
  static defaultProps = {
    writers: [
      {name: 'Jackson Browne',           image: w1,  link: 'http://www.jacksonbrowne.com'},
      {name: 'The Black Tibetans',       image: w2,  link: 'http://www.theblacktibetans.com'},
      {name: 'The Marshall Tucker Band', image: w3,  link: 'http://marshalltucker.com'},
      {name: 'Joel Rafael',              image: w4,  link: 'http://joelrafael.com'},
      {name: 'Bellflower',               image: w5,  link: 'http://www.bellflowerduo.com'},
      {name: 'Jesse Michaels',           image: w6,  link: 'http://jessemichaels.com'},
      {name: 'Dean Micetich',            image: w7,  link: 'http://www.theblacktibetans.com'},
      {name: 'John Trudell',             image: w8,  link: 'http://www.johntrudell.com'},
      {name: 'Lance Canales',            image: w9,  link: 'http://www.lancecanalesandtheflood.com'},
      {name: 'Blue October',             image: w10, link: 'http://blueoctober.com'},
      {name: 'Mark Lanegan',             image: w11, link: 'http://marklanegan.com'},
      {name: 'Chet Lyster',              image: w12},
      {image: drv,},
    ],
  }

  state = {
    height: 'auto',
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize);
  }

  updateSize = e => {
    const width = e ? e.currentTarget.outerWidth : window.outerWidth;
    const height = width < 415                  ? width
                 : width >= 415 && width < 600  ? width / 2
                 : width >= 600 && width < 1200 ? width / 5
                 : width >= 1200                ? 240
                 :                                this.state.height;
    this.setState({ height });
  }

  render() {
    return (
      <div className="clients" id="writers">
        <div className="inner">
          <div className="header-container">
            <h2 className="section-header">Writers</h2>
          </div>
          <ul className="clients-list">
            {this.props.writers.map((x, ii) =>
              <WriterItem
                key={ii}
                name={x.name}
                image={x.image}
                link={x.link}
                style={{height: this.state.height}} /> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Writers;
