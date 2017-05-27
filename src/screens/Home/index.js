import React, { Component } from 'react'
import loadingLogo from '../../static/images/drv-md.png';
import overlayLogo from '../../static/images/drive-800-307.png';
import backdrop from '../../static/images/hollywood.jpg';

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
      </div>
    )
  }
}

export default Home
