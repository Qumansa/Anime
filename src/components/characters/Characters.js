import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import useGhibliService from "../../service/GhibliService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './characters.sass';

import chihiro from '../../resources/img/characters/chihiro.jpg';
import haku from '../../resources/img/characters/haku.jpg';
import jiji from '../../resources/img/characters/jiji.jpg';
import san from '../../resources/img/characters/san.jpg';
import sheeta from '../../resources/img/characters/sheeta.jpg';
import totoro from '../../resources/img/characters/totoro.jpg';

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

    const setImage = (name) => {
        switch (name) {
            case 'Chihiro Ogino':
                return chihiro;
            case 'Haku':
                return haku;
            case 'Jiji':
                return jiji;
            case 'Lusheeta Toel Ul Laputa':
                return sheeta;
            case 'San':
                return san;
            case 'Totoro':
                return totoro;
            default:
                return;
        };
    };

    const setName = (name) => {
        switch (name) {
            case 'Chihiro Ogino':
                return 'Chihiro';
            case 'Lusheeta Toel Ul Laputa':
                return 'Sheeta';
            default:
                return name;
        };
    };

    const renderList = (arr) => {
        const items = arr.map((character) => {
            const {id, name} = character;
            const image = setImage(name);
            const transformedName = setName(name);

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