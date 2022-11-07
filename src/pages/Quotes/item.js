import React from 'react'

import "./styles.css"

function Item({ item }) {
    return (
        <div className='quoteItem'>
            <q>
                {item.quote}    
            </q>
            —
            <strong>
                {item.author}
            </strong>
        </div>
    )
}

export default Item