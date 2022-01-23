import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import useGhibliService from "../../service/GhibliService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import createImage from "../../utils/createImage";
import transformName from "../../utils/transformName";

import './characters.sass';

const Characters = () => {
    const {error, getCharacters, loading} = useGhibliService();
    const [characters, setCharacters] = useState([]);

    const onCharactersLoaded = (characters) => {
        setCharacters(characters);
    };

    const updateCharacters = () => {
        getCharacters()
            .then(onCharactersLoaded);
    };

    useEffect(() => { 
        updateCharacters();
    }, []);

    const renderList = (arr) => {
        const items = arr.map((character) => {
            const {id, name} = character;
            const image = createImage(name);
            const transformedName = transformName(name);

            return (
                <li 
                    className="characters__item"
                    key={id}>
                    <Link to={`/characters/${id}`} className="characters__link">
                        <img src={image} alt={transformedName} className="characters__img"/>
                        <h3 className="characters__title">{transformedName}</h3>
                    </Link>
                </li>
            );
        });

        return (
            <ul className="characters__list">
                {items}
            </ul>
        );
    };

    const list = renderList(characters);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) ? list : null;

    return (
        <>
            <section className="characters section">
                <h2 className="sr-only">Characters</h2>
                <div className="container">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </section>
        </>
    );
};

export default Characters;