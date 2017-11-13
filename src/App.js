import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowShelves from './ShowShelves'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
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
    // (book !== this.state.books) &&
    BooksAPI.update(book, shelf).then( this.setState ((state) => ({
      books: state.books.map(b => { 
        if (b.title === book.title) { b.shelf = shelf
      return b} else { return b } 
    }) 
  })) )}

  updateQuery = (query) => {
    this.setState(state => ({ query: query }))
    if (query.length > 0) 
      BooksAPI.search(query).then((books) => {        
        this.setState(state => ({ showingBooks: books }))
      })
      // console.log(this.state.query)
    } 

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
            onChangeShelf={(book, shelf) => {
              this.addBook(book, shelf)
              history.push('/')
            }}
            onUpdateQuery={this.updateQuery}
            query={this.state.query}
            books={this.state.books}
            showingBooks={this.state.showingBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
