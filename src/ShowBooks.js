import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowBooks extends Component {
  state = {
    
  }

  render() {

    const { onChangeShelf, books, shelf} = this.props

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (           
            shelf === book.shelf ? (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option selected value={book.shelf} onChange={() => onChangeShelf(book)}>Currently Reading</option>
                        <option value={book.shelf} onChange={() => onChangeShelf(book)}>Want to Read</option>
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

    )
  }
}

export default ShowBooks