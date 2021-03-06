import React from 'react'

const ShowBooks = ({onChangeShelf, books, shelf}) => {

  return (

    <ol className="books-grid">

      {
        Array.isArray(books) ? (
        books.map((book) => (
          ((shelf === book.shelf) || (shelf === '')) && (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                {(book.shelf === undefined) && (book.shelf = '')}

                  <select value={book.shelf} onChange={event => onChangeShelf(book, event.target.value)}>

                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read">Read</option>
                    <option value=''>None</option>

                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.auther}</div>
            </div>
          </li>
        )))
      ) : (
        <h2>No Results...</h2>
      )
    }
    </ol>

  );
};

export default ShowBooks
