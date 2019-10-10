import React from 'react';
import './index.scss';

export default class Episodes extends React.Component {
  render() {
    return (
      <div className="episode">
        <h2 className="episodeName">{this.props.episodeName}</h2>
        <p className="episodeDescripton">{this.props.episodeDescription}</p>
      </div>
    );
  }
}