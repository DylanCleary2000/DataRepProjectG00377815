import React from 'react';
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                
                <img src={this.props.book.Cover} width="200" height="200"></img>
                <Card>
                    <Card.Title>{this.props.book.Title}</Card.Title>
                    <Card.Header>By {this.props.book.Author} </Card.Header>
                    <Card.Header>Year of Release: {this.props.book.Year}</Card.Header>
                    <Card.Header> "{this.props.book.Quote}"</Card.Header>

                    
                </Card>
            </div>
        );


    }
}