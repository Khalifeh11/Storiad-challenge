import React from 'react'

function BookCover({image}) {
  return (
    <div>
        <img src={image} alt="book cover" />
    </div>
  )
}

export default BookCover