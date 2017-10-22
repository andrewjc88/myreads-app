import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBooks from './ShowBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  addBook(book) {
    BooksAPI.create(book).then(book => {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks

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
