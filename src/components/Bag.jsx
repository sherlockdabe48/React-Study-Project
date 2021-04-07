import React from 'react'
import BagBookList from './BagBookList'

export default function Bag() {
    return (
        <div>
            <h2 className="topic">In my Bag</h2>
            <div class="bag-container">
                
                <BagBookList />
                <div className="btn--container">
                    <button className="btn btn--optional btn--see-more">See More &gt;</button>
                </div>
            </div>
        </div>
    )
}
