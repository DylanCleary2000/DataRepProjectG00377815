import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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

                    <Link to={"/edit/"+ this.props.book._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );


    }
}