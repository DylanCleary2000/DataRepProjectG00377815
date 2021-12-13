import React from 'react';
import { Books } from './books';
import axios from 'axios';

export class ReadBook extends React.Component {
    constructor() {
        super();
        this.reloadBookData = this.reloadBookData.bind(this);
    }
    //Empty array of books for state
    state = {
        books: [
            
        ]
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')//Promise to get Book Data
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    //Used for when there is a Deletion.
    reloadBookData() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    render() {
        return (
            <div>
                <h1 class="display">Library</h1>
                <Books books={this.state.books} reloadBookData={this.reloadBookData}></Books>
            </div>

        );


    }
}