import { queryByPlaceholderText } from '@testing-library/dom';
import React from 'react';
import axios from 'axios';

export class EditBook extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this)
        this.onChangeQuote = this.onChangeQuote.bind(this)
        this.onChangeCover = this.onChangeCover.bind(this)

        this.state = {
            Title: '',
            Year: '',
            Author: '',
            Quote: '',
            Cover: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Author: response.data.author,
                    Quote: response.data.quote,
                    Cover: response.data.cover
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    onChangeTitle(e) {//When title is changed,change state of title.
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e) {//When year is changed,change state of year.
        this.setState({
            Year: e.target.value
        })
    }

    onChangeAuthor(e) {//When author is changed,change state of author.
        this.setState({
            Author: e.target.value
        })
    }

    onChangeQuote(e) {//When quote is changed,change state of quote.
        this.setState({
            Quote: e.target.value
        })
    }

    onChangeCover(e) {//When cover is changed,change state of cover.
        this.setState({
            Cover: e.target.value
        })
    }

    onSubmit(e) {//Updates Books
        e.preventDefault();
        alert("Book: " + this.state.Title + this.state.Year + this.state.Author + this.state.Quote + this.state.Cover);
        const newBook = {
            title: this.state.Title,
            year: this.state.Year,
            author: this.state.Author,
            quote: this.state.Quote,
            cover: this.state.Cover,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/books/' + this.state._id, newBook)
            .then(res => {
                console.log(res.data)
            })
            .catch();
        // axios.post('http://localhost:4000/api/books', newBook)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

    }
    render() {
        return (
            <div className='App' class="display">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Year:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>

                    </div>

                    <div className="form-group">
                        <label>Add Author:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Author}
                            onChange={this.onChangeAuthor}></input>

                    </div>

                    <div className="form-group">
                        <label>Add Your Favourite Quote:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Quote}
                            onChange={this.onChangeQuote}></input>

                    </div>

                    <div className="form-group">
                        <label>Change Cover:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangeCover}></input>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Book" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );


    }
}