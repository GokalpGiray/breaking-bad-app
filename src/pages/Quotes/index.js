import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { errorSelector, fetchAllQuotes, quotesSelector, statusSelector } from '../../redux/quotesSlice';
import Item from './item';

function Quotes() {
    const dispatch = useDispatch();
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllQuotes());
        };
    }, [dispatch, status]);

    if (status === "failed") {
        return <Error message={error} />
    }

    return (
        <div style={{ padding: 10 }}>
            <h1>Quotes</h1>

            {
                status === "loading" && <Loading />
            }

            {
                status === "succeeded" && data.map(
                    (item) => <Item item={item} key={item.quote_id} />
                )
            }

            {
                status === "succeeded" && <div className='quotesInfo'>{data.length} quotes</div>
            }
        </div>
    )
}

export default Quotes