import React, { Component } from 'react'
import Writers from './Writers.js';
import loadingLogo from '../../static/images/drv-md.png';
import overlayLogo from '../../static/images/drive-800-307.png';
import backdrop from '../../static/images/hollywood.jpg';
import copyright from './copyright-icon.svg';
import play from './play-icon.svg';
import redeem from './redeem-icon.svg';



export class Home extends Component {
  state = {
    spinnerClass: '',
    spinnerStyle: {visibility: 'hidden'},
    backdropClass: '',
    backdropStyle: {visibility: 'hidden'},
    overlayClass: '',
    overlayStyle: {visibility: 'hidden'},
  }

  componentDidMount() {
    this.setState({
      spinnerClass: 'animated flipInX',
      spinnerStyle: {visibility: 'visible'},
    });
    setTimeout(this.animateIn, 1500);
  }

  animateIn = () => {
    this.setState({
      spinnerClass: 'animated fadeOut',
      overlayClass: 'animated fadeInUp',
      overlayStyle: {visibility: 'visible'},
      backdropClass: 'animated fadeIn',
      backdropStyle: {visibility: 'visible'},
    });
  }

  render() {
    return (
      <div>
        <div className="site-landing">
          <img
            className={this.state.spinnerClass}
            style={this.state.spinnerStyle}
            id="landing-spinner" src={loadingLogo}
            alt="Drive logo" />
          <div
            id="landing-hero"
            className={this.state.backdropClass}
            style={{...this.state.backdropStyle, backgroundImage: `url(${backdrop})`}}>
            <img
              id="landing-logo"
              className={this.state.overlayClass}
              src={overlayLogo}
              style={this.state.overlayStyle}
              alt="Sunset Blvd. Los Angeles" />
          </div>
        </div>
        <div className="excerpt" id="about">
          <div className="excerpt-header">About <span className="sub">us</span></div>
          <div className="excerpt-headline">DRV is more than an independent music publishing company.</div>
          <div className="excerpt-summary">
            <div className="excerpt-summary__paragraph">From legacy catalogs to new songwriters, we partner with you to understand your needs and customize a plan for growth.  Led by Ana Ruiz and Joe Rausch, DRV is fueled by the need to provide the best opportunities worldwide, and get the most out of your catalog.</div>
            <div className="excerpt-summary__paragraph">We are proud members of the National Music Publishers Association (NMPA), Association of Independent Music Publishers (AIMP), California Copyright Conference (CCC), and National Academy of Recording Arts and Sciences (NARAS).</div>
            <div className="excerpt-summary__sig">And, we’re easy to talk to…</div>
          </div>
        </div>
        <div className="drv-container services" id="services">
          <div className="inner">
            <div className="service-item p-left">
              <div className="title-container">
                <img style={styles.icon} src={copyright} alt="Administration" />
                <h3 className="headline">Administration</h3>
              </div>
              <div className="desc-container">
                <p className="meta">Manage Compositions</p>
                <p className="meta">Copyrights and Registrations</p>
                <p className="meta">Licensing</p>
              </div>
            </div>
            <div className="service-item">
              <div className="title-container">
                <img style={styles.icon} src={play} alt="Creative" />
                <h3 className="headline">Creative</h3>
              </div>
              <div className="desc-container">
                <p className="meta">Song Placements in All Media</p>
                <p className="meta">New Income Streams</p>
                <p className="meta">Covers, and Special projects</p>
              </div>
            </div>
            <div className="service-item p-right">
              <div className="title-container">
                <img style={styles.icon} src={redeem} alt="Royalties" />
                <h3 className="headline">Royalties</h3>
              </div>
              <div className="desc-container">
                <p className="meta">Worldwide Royalty Collection</p>
                <p className="meta">Income Tracking and Processing</p>
                <p className="meta">Quarterly Accounting</p>
              </div>
            </div>
          </div>
        </div>

          <Writers />

      </div>
    );
  }
}

const styles = {
  icon: {
    width: '48px',
  },
};

export default Home;
