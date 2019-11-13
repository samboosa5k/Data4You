import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <div key={this.props.index} className="product">
                <img src={this.props.img_url} alt="image" />
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
}
