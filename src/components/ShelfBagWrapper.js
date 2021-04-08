import React from 'react'
import Shelf from './Shelf'
import Bag from './Bag'

export default function ShelfBagWrapper({bagBooks, shelfBooks}) {
    console.log(bagBooks)
    console.log(shelfBooks)
    return (
        <div className="shelf-bag-wrapper">
        <Bag bagBooks={bagBooks} />
        <Shelf shelfBooks={shelfBooks} />
        </div>
    )
}
