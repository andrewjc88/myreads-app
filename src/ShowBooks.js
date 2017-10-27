import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowBooks extends Component {
  state = {
    selectedShelf: ''
  }
  
  // updateShelf = (selectedShelf) => {
  //   this.setState({ selectedShelf = })
  // }

  render() {
    const { onChangeShelf } = this.props
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (           
                    book.shelf === "currentlyReading" ? (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option selected value={book.shelf} onChange={() => onChangeShelf(book)}>urrently Reading</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>Want to ReadC</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>Read</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.auther}</div>
                        </div>
                      </li>
                    ):(null)
                  ))}
                </ol>
              </div>
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (           
                    book.shelf === "wantToRead" ? (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>Currently Reading</option>
                                <option selected value={book.shelf} onChange={() => onChangeShelf(book)}>Want to Read</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>Read</option>
                                <option value={book.shelf} onChange={() => onChangeShelf(book)}>None</option>
                                </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.auther}</div>
                        </div>
                      </li>
                    ):(null)
                  ))}
                </ol>
              </div>
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (           
                  book.shelf === "read" ? (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>Move to...</option>
                              <option value={book.shelf} onChange={() => onChangeShelf(book)}>Currently Reading</option>
                              <option value={book.shelf} onChange={() => onChangeShelf(book)}>Want to Read</option>
                              <option selected value={book.shelf} onChange={() => onChangeShelf(book)}>Read</option>
                              <option value={book.shelf} onChange={() => onChangeShelf(book)}>None</option>
                              </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.auther}</div>
                      </div>
                    </li>
                  ):(null)
                ))}
              </ol>
            </div>            
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/AddBook">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ShowBooks