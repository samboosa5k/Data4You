import React from 'react';
import './index.scss';

export default class Quotes extends React.Component {
  render() {
    return (
      <div className="theQuote">
        <h2 className="name">{this.props.name}</h2>
        <p className="quote">{this.props.quote}</p>
      </div>
    );
  }
}