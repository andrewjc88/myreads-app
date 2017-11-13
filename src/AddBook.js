import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShowBooks from './ShowBooks'

class AddBook extends Component {

  render() { 

    const { query, showingBooks, onUpdateQuery} = this.props

    // showingBooks.filter(queryBooks => {

    // })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">        
            <input
              className="input"
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => onUpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
            {console.log(showingBooks)}
            {((query.length > 0 && (showingBooks[0] !== undefined)) &&

            <ShowBooks
              onChangeShelf={ this.props.onChangeShelf }
              books={ showingBooks }
            />            
              
            ) || (
                <h2>No Results...</h2>
              )
            } 
        </div>
      </div>
    )
  }
}

export default AddBook