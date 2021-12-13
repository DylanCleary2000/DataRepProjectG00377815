
import React from 'react';
import axios from 'axios';

export class CreateBook extends React.Component {

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

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }

    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        })
    }

    onChangeQuote(e) {
        this.setState({
            Quote: e.target.value
        })
    }

    onChangeCover(e) {
        this.setState({
            Cover: e.target.value
        })
    }

    //Outputs to the browser
    onSubmit(e) {
        e.preventDefault();
        alert("Book: " + this.state.Title + this.state.Year + this.state.Author + this.state.Quote + this.state.Cover);
        const newBook = {
            title: this.state.Title,
            year: this.state.Year,
            author: this.state.Author,
            quote: this.state.Quote,
            cover: this.state.Cover
        }
        //Axios Handling HTTP
        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    //After values have been entered into the input boxes,triggers onChange and passed values to their associated methods.
    
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
                        <br></br>
                    </div>


                    <div className="form-group">
                        <label>Add Year:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label>Add Author:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Author}
                            onChange={this.onChangeAuthor}></input>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label>Add Quote:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Quote}
                            onChange={this.onChangeQuote}></input>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label>Add Cover:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangeCover}></input>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Book" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );


    }
}