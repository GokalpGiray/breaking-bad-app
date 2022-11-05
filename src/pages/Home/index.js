import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';

import Masonry from "react-masonry-css";
import "./styles.css" 

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
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
        </div>
    )
}

export default Home