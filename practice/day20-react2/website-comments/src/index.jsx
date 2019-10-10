import React from 'react';
import ReactDOM from 'react-dom';
import Question from './question/question.jsx';
import Comment from './comments/comment.jsx';
import './style.css';
import './index.html';
import { question, comments } from './comments/comments';

class Page extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            likes: 0,
            totalLikes: 0
        }
    }

    handleClick = () => {
        this.setState( { likes: this.state.likes + 1 } );
        this.setState( { totalLikes: this.state.totalLikes + 1 } );
        console.log( this.state.likes );
    }

    handleTotal = () => {
        this.setState( { totalLikes: this.state.totalLikes + 1 } );
    }

    render() {
        return (
            <>
                <Question
                    mainh1={question.user}
                    mainp={question.text}
                    likes={this.state.likes}
                    handleLike={this.handleClick}
                    totalLikes={this.state.totalLikes}
                />

                <>
                    {
                        comments.map( comment =>
                            (
                                <Comment
                                    commenth2={comment.user}
                                    commentp={comment.comment}
                                    handleTotal={this.handleTotal}
                                />
                            )
                        )
                    }
                </>

            </>
        )
    }
}

ReactDOM.render( <Page />, document.getElementById( 'app' ) );