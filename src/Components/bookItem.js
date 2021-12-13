import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItem extends React.Component {
    constructor() {
        super();

        //Must Bind
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(e) {
        e.preventDefault();//Prevents unwanted deletions from our database/
        console.log("DELETED" + this.props.book._id);
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)//Axios request for a delete at this particular id.
            .then(() => {
                this.props.reloadBookData();//Calls ReloadBookData on books.js,then calls ReloadData on readBook.js,updates list.
            })
            .catch();
    }

    render() {
        return (
            //Renders our Card with data from this.props
            <div class="card">
                <Card>
                    <img src={this.props.book.cover} width="250" height="200" ></img>
                    <div class="container">
                        <h1>{this.props.book.title}</h1>
                        <h3>By {this.props.book.author}</h3>
                        <p>Year of Release: {this.props.book.year}</p>
                        <p> "{this.props.book.quote}"</p>
                        {/* Button for our edit book page */}
                        <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">Edit</Link>
                        {/* Deletes our book from the database */}
                        <Button variant="danger" onClick={this.deleteBook}>Delete</Button>
                    </div>
                </Card>
            </div>





        );


    }
}