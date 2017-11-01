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

  changeShelf = (book, shelf) => {
    
    this.state.setState((state) => ({
      book: state.book.filter((c) => c.shelf !== book.shelf)       
    }))
    // console.log(book)
    // console.log(Option)
    
    // console.log(shelf)
   this.props.BooksAPI.update(book)
  }

  // BooksAPI.update(book, shelf).then(
  //   this.setState((state) => ({
  //     books: state.books.map(b => {
  //       if (b.title === book.title) {
  //         b.shelf = shelf;
  //         return b
  //       } else {
  //         return b
  //       }
  //     })
  //   }))
  // )

  render() {

    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <ShowShelves
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
