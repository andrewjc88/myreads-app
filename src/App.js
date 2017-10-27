import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBooks from './ShowBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  addBook(book) {
    BooksAPI.create(book).then(book => {
      this.setState(state => ({

        books: state.books.set([ book ])
      }))
    })
  }

  changeShelf = (book) => {
    this.setState((state) => ({
      books: state.book.filter((c) => c.shelf !== book.shelf)       
    }))
    BooksAPI.update(book)
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks
            onChangeShelf={this.changeShelf}
            books={this.state.books}
          />
        )}/>
        <Route path="/AddBook" render={({ history }) => (
          <AddBook
            /* onAddBook={(book) => {
              this.addBook(book)
              history.push('/')
            }}  */
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
