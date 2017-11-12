import React, { Component } from 'react'

class ShowBooks extends Component {

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

                      <select value={book.shelf} onChange={event => onChangeShelf(book, event.target.value)}>

                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read">Read</option>
                        <option value={null}>None</option>

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