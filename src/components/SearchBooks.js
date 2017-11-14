import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ShowBooks from './ShowBooks'

class SearchBooks extends Component {
  constructor(args) {
    super(args);  
    this.state = {
    query: '',
    bookResults: []
    }
  }

  queryInput = (query) => {
    this.setState(state => ({ query: query }))
    if (query.length > 0) {
      BooksAPI.search(query, 20).then((QueryRsults) => {     
        
        QueryRsults = QueryRsults.map((book) => {
          const bookInShelf = this.props.books.find(b => b.id === book.id)
          if (bookInShelf) {
            book.shelf = bookInShelf.shelf
          }
          return book;
        })
        
        this.setState({ QueryRsults })
      })
    }}

  render() { 

    const { query, QueryRsults } = this.state
    {console.log(QueryRsults)}
    
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
              onChange={(event) => this.queryInput(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

            {((query.length > 0 && (QueryRsults.error !== true)) &&
            <ShowBooks
              onChangeShelf={ this.props.onChangeShelf }
              books={QueryRsults}
            />            
            ) || (
                <h2>No Results...</h2>
              )
            } 
        </div>
      </div>
    )
  }
}

export default SearchBooks