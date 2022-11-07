import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';

import Masonry from "react-masonry-css";
import "./styles.css"
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const nextPage = useSelector((state) => state.characters.page);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (error) {
        return <Error message={error} />
    }

    return (
        <div>
            <h1>Characters</h1>

            <Masonry
                breakpointCols={4}
                className="my-masonary-grid"
                columnClassName="my-masonary-grid_column"
            >
                {
                    characters.map(character => (
                        <div key={character.char_id}>
                            <img src={character.img} alt={character.name} className="character" />
                            <div className='charName'>{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>

            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {isLoading && <Loading />}

                {hasNextPage && !isLoading && <button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>}

                {!hasNextPage && <div>There is nothing to be shown</div> }
            </div>
        </div>
    )
}

export default Home