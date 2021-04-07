import React from 'react'
import ShelftBookList from './ShelftBookList'

export default function Shelft() {
    return (
        <div>
            <h2 className='topic'>In my Shelft</h2>
            <div class="shelft-container">
               
                <ShelftBookList />                
                <div className="btn--container">
                <button className="btn btn--optional btn--see-more">See More &gt;</button>
                </div>
            </div>
        </div>
    )
}
