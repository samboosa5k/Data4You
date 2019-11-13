import React from 'react';
import ReactDOM from 'react-dom';

export default class Users extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            data: '',
            search: '',
            person: '',
            empty: false
        }
    }

    componentDidMount() {
        fetch( 'https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05' )
            .then( response => response.json() )
            .then( data => (
                this.setState( { data: data } )
            ) )
    }

    componentDidUpdate() {
        if ( this.state.empty === false ) {
            this.setState( { empty: !this.state.empty } )
            if ( this.state.data !== '' && this.props.search !== null ) {
                this.setState( { person: this.state.data['attendance'].find( elem => elem['id'] == this.props.search ) } )
            }
        }
    }

    render() {
        let content = 'Loading...';

        if ( this.state.data !== '' && this.state.person === '' ) {
            content = this.state.data.attendance.map( ( item, key ) => (
                <li key={key}>Id: {item.id}, Name: {item.name}, Present: {( item.from === null ) ? "Not present" : item.from}</li>
            ) )
        } else if ( this.state.person !== '' ) {
            content =
                <>
                    <h1>{this.state.person['id']}</h1>
                    <p>{this.state.person['name']}</p>
                    <p>{this.state.person['from']}</p>
                </>
        }

        return (
            <ul>
                {
                    content
                }
            </ul>
        )
    }
}