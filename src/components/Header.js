import React, { Component } from 'react'
import logo from '../static/images/drv-blue-310x310.png';
import { Linkedin, Twitter } from '../common/Icons.js';

export class Header extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    this.resize = window.addEventListener('resize', e => {
      if (e.currentTarget.outerWidth > 800 && this.state.visible) {
        this.onNavbarVisibilityChange()
      }
    });
  }

  componentWillUnmount() {
    window.removeListener(this.resize);
  }

  onNavbarVisibilityChange = () => {
    const { visible } = this.state;
    document.body.className = visible ? '' : 'opened';
    this.setState({visible: !visible})
  }

  render() {
    return (
      <header className="site-header">
        <nav className="site-nav">
          <ul className="nav-icons">
            <li className="nav-icon">
              <a href="/#">
                <img style={styles.icon} src={logo} alt="Drive" />
              </a>
            </li>
            <li className="nav-icon">
              <a href="https://twitter.com/DriveMusicPub" target="_blank" rel="noopener noreferrer">
                <Twitter style={styles.icon} />
              </a>
            </li>
            <li className="nav-icon">
              <a href="https://www.linkedin.com/company/drive-music-publishing" target="_blank" rel="noopener noreferrer">
                <Linkedin style={styles.icon} />
              </a>
            </li>
          </ul>
          <div onClick={this.onNavbarVisibilityChange} style={styles.burger}>
            <hr style={styles.barTop} />
            <hr style={styles.barBottom} />
          </div>
        </nav>
        <ul className="site-menu">
          <li className="menu-item"><a href="#writers">Writers</a></li>
          <li className="menu-item"><a href="/partners.html">Partners</a></li>
          <li className="menu-item"><a href="#about">About</a></li>
          <li className="menu-item"><a href="/solutions.html">Solutions</a></li>
          <li className="menu-item"><a href="/latin.html">Latin</a></li>
        </ul>
      </header>
    );
  }
}

const bar = {
  display: 'block',
  backgroundColor: '#346FA4',
  transition: 'all .2s ease-out',
  border: 'none',
  outline: 'none',
  fontSize: 0,
  lineHeight: 0,
  marginTop: 0,
  marginBottom: '5px',
};

const styles = {
  barBottom: {
    ...bar,
    top: '11px',
    width: '25px',
    height: '3px',
  },
  barTop: {
    ...bar,
    top: '5px',
    width: '25px',
    height: '3px',
  },
  burger: {
    position: 'absolute',
    right: '30px',
    top: 0,
    bottom: 0,
    width: '50px',
    height: '50px',
    padding: '25px',
    cursor: 'pointer',
  },
  icon: {
    width: '35px',
    height: '35px',
    marginTop: '10px',
  },
};

export default Header
