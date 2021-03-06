import React, { Component } from 'react';

export class Solutions extends Component {
  render() {
    return (
      <div
        className="excerpt solutions"
        style={{backgroundImage: 'url(images/drv-op-10.png)'}}>
        <div className="excerpt-header">
          <img
            className="animated fadeIn"
            src="images/solutions.png"
            alt="Solutions" />
        </div>
        <div className="excerpt-headline">A consulting division providing support and insight for various aspects of the music industry.</div>
        <div className="excerpt-summary">
          <div className="excerpt-summary__paragraph">We team with management companies to expand your reach into the music industry.  Our solutions offer you more opportunities for income generating initiatives.  Through income assessments, royalty analysis and global tracking, we help you target key areas to increase revenue.</div>
          <div className="excerpt-summary__paragraph">We also work alongside songwriters, artists, and producers, providing best practices to help manage the business side and monetize effectively.</div>
        </div>
      </div>
    );
  }
}

export default Solutions
