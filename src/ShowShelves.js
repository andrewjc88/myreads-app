import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import changeCase from 'change-case'
import ShowBooks from './ShowBooks'
// import sortBy from 'sort-by'

class ShowShelves extends Component {

  render() {
    const { books } = this.props
    const bookShelves = books.map(book => book = book.shelf )
    const shelves = [...new Set(bookShelves)]



    return (
      <div>
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            {shelves.map((shelf) => ( 

            <div className="list-books-content" key={shelf}>
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{changeCase.titleCase(shelf)}</h2>
                  <div className="bookshelf-books">
                    <ShowBooks
                      onChangeShelf={ this.props.onChangeShelf }
                      shelf={ shelf }
                      books={ books }
                    />
                  </div>
                </div>            
              </div>
            </div>
            ))} 

            <div className="open-search">
              <Link to="/AddBook">Add a book</Link>
            </div>
          </div>
      </div>

    )
  }
}
  
export default ShowShelves
