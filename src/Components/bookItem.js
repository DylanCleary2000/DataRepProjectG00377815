import React from 'react';
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                
                <img src={this.props.book.cover} width="200" height="200"></img>
                <Card>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Header>By {this.props.book.author} </Card.Header>
                    <Card.Header>Year of Release: {this.props.book.year}</Card.Header>
                    <Card.Header> "{this.props.book.quote}"</Card.Header>

                    
                </Card>
            </div>
        );


    }
}