import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import ShowBooks from './ShowBooks'
import {DebounceInput} from 'react-debounce-input';

class SearchBooks extends Component {

  state = {
    query: '',
    bookResults: []
  }

  getResults = (query) => {
    this.setState(state => ({ query }))
    BooksAPI.search(query, 20).then((QueryRsults) => {
      this.setState({ QueryRsults })
    })
  }

  checkShelf = (QueryRsults) => {
    QueryRsults.map((book) => {
      const bookInShelf = this.props.books.find(b => b.id === book.id)

      if (bookInShelf) {
        book.shelf = bookInShelf.shelf
      }
      return book;
    })
  }

  render() {

    const { query, QueryRsults } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={process.env.PUBLIC_URL + '/'}>Close</Link>
          <div className="search-books-input-wrapper">
              <DebounceInput
                minLength={2}
                debounceTimeout={400}
                type="text"
                className="input"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.getResults(event.target.value)}
              />
          </div>
        </div>

        <div className="search-books-results">
            <ShowBooks
              onChangeShelf={ this.props.onChangeShelf }
              books={QueryRsults}
            />
        </div>
      </div>
    )
  }
}

export default SearchBooks
