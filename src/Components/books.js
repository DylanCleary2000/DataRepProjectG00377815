import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component {
    render() {
        return this.props.books.map((book)=>{
            return <BookItem book={book} reloadBookData = {this.props.reloadBookData}></BookItem>//Splits Books apart into seperate Book Items
        })


    }
}