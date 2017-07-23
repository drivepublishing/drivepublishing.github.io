import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.setState({visible: !visible});
  }

  collapseOpenNav = () => {
    const { visible } = this.state;
    if (visible) {
      this.onNavbarVisibilityChange();
    }
  }

  render() {
    return (
      <header className="site-header">
        <nav className="site-nav">
          <ul className="nav-icons">
            <li className="nav-icon">
              <Link to="/">
                <img
                  style={styles.icon}
                  src={`public/images/drv-blue-310x310.png`}
                  alt="Drive" />
              </Link>
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
          <li className="menu-item"><Link to="partners" onClick={this.collapseOpenNav}>Partners</Link></li>
          <li className="menu-item"><Link to="solutions" onClick={this.collapseOpenNav}>Solutions</Link></li>
          <li className="menu-item"><Link to="latin" onClick={this.collapseOpenNav}>Latin</Link></li>
          <li className="menu-item"><Link to="lighthopelife" onClick={this.collapseOpenNav}>LightHopeLife</Link></li>
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
    padding: '30px',
    cursor: 'pointer',
  },
  icon: {
    width: '35px',
    height: '35px',
    marginTop: '10px',
  },
};

export default Header
