import React from 'react'

import { Link } from 'react-router-dom'

import "./styles.css"

function Item({ item }) {
    return (
        <div className='quoteItem'>
            <Link to={`/quotes/${item.quote_id}`}>
                <q>
                    {item.quote}
                </q>
                —
                <strong>
                    {item.author}
                </strong>
            </Link>
        </div>
    )
}

export default Item