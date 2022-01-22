import { useState, useEffect } from "react";
import useGhibliService from "../../service/GhibliService";

import './characters.sass';

import chihino from '../../resources/img/characters/chihino.jpg';
import haku from '../../resources/img/characters/haku.jpg';
import jiji from '../../resources/img/characters/jiji.jpg';
import san from '../../resources/img/characters/san.jpg';
import sheeta from '../../resources/img/characters/sheeta.jpg';
import totoro from '../../resources/img/characters/totoro.jpg';

const Characters = () => {
    const {error, getCharacters, loading} = useGhibliService();

    const onCharactersLoaded = (data) => {
        console.log(data);
    };

    const updateCharacters = () => {
        getCharacters()
            .then(onCharactersLoaded);
    };

    useEffect(() => { 
        updateCharacters();
    }, []);

    return (
        <>
            <section className="characters section">
                <div className="container">
                    <h2 className="characters__title section__title">Characters</h2>
                    <ul className="characters__list">
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={chihino} alt="Chihino" className="characters__item-img"/>
                                <h3 className="characters__item-title">Chihino</h3>
                            </a>
                        </li>
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={haku} alt="Haku" className="characters__item-img"/>
                                <h3 className="characters__item-title">Haku</h3>
                            </a>
                        </li>
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={jiji} alt="Jiji" className="characters__item-img"/>
                                <h3 className="characters__item-title">Jiji</h3>
                            </a>
                        </li>
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={san} alt="San" className="characters__item-img"/>
                                <h3 className="characters__item-title">San</h3>
                            </a>
                        </li>
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={sheeta} alt="Sheeta" className="characters__item-img"/>
                                <h3 className="characters__item-title">Sheeta</h3>
                            </a>
                        </li>
                        <li className="characters__item">
                            <a href="" className="characters__item-link">
                                <img src={totoro} alt="Totoro" className="characters__item-img"/>
                                <h3 className="characters__item-title">Totoro</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Characters;