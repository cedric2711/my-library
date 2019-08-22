// libraries
import React, {Component} from "react"
import {connect} from "react-redux"

// actions
import {handleAddBook} from "../actions/books";


class AddBook extends Component {

    addBook = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {dispatch} = this.props;
        const form = e.currentTarget.elements;
        const formData = {
            author: form.author.value,
            title: form.title.value,
            country: form.country.value,
            imageLink: form.imageLink.value,
            language: form.language.value,
            link: form.link.value,
            pages: form.pages.value,
            year: form.year.value
        }
        dispatch(handleAddBook(formData));
    }
    getYear = () => {
        let year=[];
        for (let i=2019; i>=1900; i--) {
            year.push(i);
        }
        return year;
    }
    render () {
        const year= this.getYear();
        return (
            <div>
                <form className="library-form library-form-aligned" onSubmit={(e) =>(this.addBook(e))} >
                    <fieldset>
                        <legend>Add a Book</legend>
                        <div className="library-control-group">
                            <label htmlFor="author">Author</label>
                            <input id="author" type="text" placeholder="Author" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" placeholder="Title" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="country">Country</label>
                            <input id="country" type="text" placeholder="Country" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="imageLink">Image Link</label>
                            <input id="imageLink" type="text" placeholder="Image Link"/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="language">Language</label>
                            <input id="language" type="text" placeholder="language" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="link">Book Link</label>
                            <input id="link" type="text" placeholder="Book Link" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="pages">Number of Pages</label>
                            <input id="pages" type="number" placeholder="Number of Pages" required/>
                        </div>

                        <div className="library-control-group">
                            <label htmlFor="year">Year</label>
                            <select id="year">
                                {
                                    year.map((yr) => (<option key={yr} value={yr}>{yr}</option>))
                                }
                            </select>
                        </div>

                        <div className="library-controls">
                            <button type="submit" className="library-button library-button-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({books, myReads, authedUser}) => ({books, myReads, authedUser})

export default connect(mapStateToProps)(AddBook)