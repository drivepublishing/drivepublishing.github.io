import React, { Component } from 'react';

const PUBLIC_PATH = 'public';

export class LightHopeLife extends Component {
  render() {
    return (
      <div
        className="excerpt solutions"
        style={{backgroundImage: `url(${PUBLIC_PATH}/images/drv-op-10.png)`}}>
        <div className="excerpt-header">
          <a
            href="http://www.lighthopelife.org/index.html"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="animated fadeIn"
              src={`${PUBLIC_PATH}/images/light-hope-life.png`}
              alt="LightHopeLife" />
          </a>
        </div>
        <div className="excerpt-summary">
          <div className="excerpt-summary__paragraph">As mental illness and suicide are among the last remaining subjects that are shrouded in secrecy and silence in our society, LightHopeLife Inc., a 501(c)(3) nonprofit foundation, was created by Drive's legal counsel to raise critically needed funds for those organizations that are dedicated to research, outreach, education, volunteering and the numerous other aspects of mental health awareness and suicide prevention, but perhaps more importantly, it was created to educate people as to how to talk to people who might be in despair.</div>
          <div className="excerpt-summary__paragraph">The deafening silence with which depression and other mental illnesses are largely met in most corners of society perpetuates the very isolation and alienation that compounds the problem and keeps those who are suffering—those who are most in need—from seeking and receiving the help that is so critically needed.  Further complicating this epidemic is the fact that few people are equipped with something meaningful to say when concerned about someone's mental health or when concerned that someone may be suicidal. Please join DRV in supporting LightHopeLife by donating <a href="http://www.lighthopelife.org/donate.html" target="_blank" rel="noopener noreferrer">here.</a></div>
        </div>
      </div>
    );
  }
}

export default LightHopeLife
