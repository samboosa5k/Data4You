import React from 'react';
import './index.scss';

export default class Card extends React.Component {
    render() {
        return (
            <>
                <h2 className="title">{this.props.title}</h2>
                <p className="content">{this.props.content}</p>
            </>
        )
    }
}