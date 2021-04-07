import React from 'react'
import BookImageContainer from './BookImageContainer'

export default function ShelftBookList() {
    return (
        <div className="shelft-book-list__grid">
            <BookImageContainer />
            <BookImageContainer />
            <BookImageContainer />
            <BookImageContainer />
            <BookImageContainer />
            <BookImageContainer />
        </div>
    )
}
