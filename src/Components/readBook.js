import React from 'react';
import { Books } from './books';

export class ReadBook extends React.Component {

state={
    books: [
        {
            "Title":"Harry Potter and the Philosopher's Stone",
            "Year":"1997",
            "Author":"J.K.Rowling",
            "Quote":"It does not do to dwell on dreams and forget to live.",
            "Cover":"https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"
        },
        {
            "Title":"Alice in Wonderland",
            "Year":"1865",
            "Author":"Lewis Carroll",
            "Quote":"It's no use going back to yesterday, because I was a different person then.",
            "Cover":"https://www.collegefashion.net/wp-content/uploads/2019/01/aliceinwonderlandcover.jpg"
        }
    ]
};


    render() {
        return (
            <div>
                <h1>Library</h1>
                <Books books={this.state.books}></Books>
            </div>
        );


    }
}