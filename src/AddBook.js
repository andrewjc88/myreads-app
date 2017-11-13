import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBooks from './ShowBooks'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'


class AddBook extends Component {

  state = {
    query: '',
    showingBooks: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if (query.length > 0) 
      BooksAPI.search(query).then((books) => {
        // books.map((book) => (
        //   if (book)
        // ))
        
        this.setState({showingBooks: books})
      })
      console.log(this.state.showingBooks)
    } 

  render() { 

    const { query, showingBooks } = this.state

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

            {((query.length > 0 && (showingBooks[0] !== undefined)) &&

            <ShowBooks
              onChangeShelf={ this.props.onChangeShelf }
              books={ showingBooks }
            />            
              
            ) || (
                <h2>No Results...</h2>
              )
            } 

          </ol>
        </div>
      </div>
    )
  }
}

export default AddBook