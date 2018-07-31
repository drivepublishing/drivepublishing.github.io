import React, { Component } from 'react'

const PUBLIC_PATH = 'public';

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
      {name: 'Jackson Browne',           image: `${PUBLIC_PATH}/images/client-jb.jpg`,  link: 'http://www.jacksonbrowne.com'},
      {name: 'The Black Tibetans',       image: `${PUBLIC_PATH}/images/client-black-tibetans.png`},
      {name: 'The Marshall Tucker Band', image: `${PUBLIC_PATH}/images/client-marshall-tucker.png`,  link: 'http://marshalltucker.com'},
      {name: 'Joel Rafael',              image: `${PUBLIC_PATH}/images/client-joel-rafael.png`,  link: 'http://joelrafael.com'},
      {name: 'Bellflower',               image: `${PUBLIC_PATH}/images/client-bellflower.png`,  link: 'http://www.bellflowerduo.com'},
      {name: 'Jesse Michaels',           image: `${PUBLIC_PATH}/images/client-jesse-michaels.png`},
      {name: 'Dean Micetich',            image: `${PUBLIC_PATH}/images/client-dean-micetich.png`},
      {name: 'John Trudell',             image: `${PUBLIC_PATH}/images/client-john-trudell.jpg`,  link: 'http://www.johntrudell.com'},
      {name: 'Lance Canales',            image: `${PUBLIC_PATH}/images/client-lance-canales.jpg`,  link: 'http://www.lancecanalesandtheflood.com'},
      {name: 'Blue October',             image: `${PUBLIC_PATH}/images/client-blue-october.png`, link: 'http://blueoctober.com'},
      {name: 'Mark Lanegan',             image: `${PUBLIC_PATH}/images/client-mark-lanegan.png`, link: 'http://marklanegan.com'},
      {name: 'Chet Lyster',              image: `${PUBLIC_PATH}/images/client-chet-lyster.jpg`},
      {image: `${PUBLIC_PATH}/images/drv-md.png`,},
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
      <div
        className="clients"
        id="writers"
        style={{backgroundImage: `url(${PUBLIC_PATH}/images/furley_bg.png)`}}>
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
