import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import ShowShelves from './components/ShowShelves'
import SearchBooks from './components/SearchBooks'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(state => ({ books: books }))
    })
  }

  addBook = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.concat([ book ])
    }))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then( this.setState ((state) => ({
      books: state.books.map(b => {
        if (b.title === book.title) { b.shelf = shelf
      return b} else { return b }
      })
    }))
  )}

  render() {

    return (
      <div className="app">
          <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
            <ShowShelves
              books={this.state.books}
              onChangeShelf={this.changeShelf}
            />
        )}/>
        <Route path="/Search" render={({ history }) => (
          <SearchBooks
            onChangeShelf={(book, shelf) => {
              this.addBook(book, shelf)
              history.push(process.env.PUBLIC_URL + '/')
            }}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
