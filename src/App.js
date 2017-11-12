import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowShelves from './ShowShelves'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  addBook = (book) => {
    BooksAPI.create(book).then(book => {
      this.setState(state => ({
        books: state.books.set([ book ])
      }))
      console.log("was added")
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then( this.setState ((state) => ({
      books: state.books.map(b => { if (b.title === book.title) { b.shelf = shelf;
      return b} else { return b } 
    }) 
  })) )}

  render() {

    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <ShowShelves
              books={this.state.books}
              onChangeShelf={this.changeShelf}
            />
        )}/>
        <Route path="/AddBook" render={({ history }) => (
          <AddBook
            onAddBook={(book) => {
              this.addBook(book)
              history.push('/')
            }} 
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
