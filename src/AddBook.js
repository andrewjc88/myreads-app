import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'


class AddBook extends Component {

  state = {
    query: '',
    showingBooks: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    BooksAPI.search(query).then((books) => {
      this.setState({showingBooks: books})
    })
  } 

  // getBooks = (query) => {
  //   BooksAPI.search(query).then((books) => {
  //     this.setState({showingBooks: books})
  //   })
  // }

  // changeShelf = (book, shelf) => {
  //   BooksAPI.update(book, shelf).then( 
  //     this.setState ((state) => ({
  //     books: state.books.map(b => { 
  //       if (b.title === book.title) { b.shelf = shelf return b} 
  //       else { return b } 
  //     }) 
  //   }))
  // )}

  render() { 

    const { query, showingBooks } = this.state
    const { addBook } = this.props
    // let showingBooks = this.getBooks(query)
    // console.log(showingBooks)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">        

            <input
              className="input"
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {console.log(showingBooks)}
        

            {(query != 0 && showingBooks.includes('error') !== true) ? (
              showingBooks.map((book) => (       
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">

                        <select value={book.shelf} onChange={event => AddBook(book, event.target.value)}>

                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read">Read</option>
                          <option value={null}>None</option>

                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.auther}</div>
                  </div>
                </li>
              ))
            ):(
              <div>...Search For Some Books!</div>
            )} 

          </ol>
        </div>
      </div>
    )
  }
}

export default AddBook