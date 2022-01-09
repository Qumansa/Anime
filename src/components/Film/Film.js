import { useState, useEffect } from "react";

import useGhibliService from '../../service/GhibliService';

const Film = () => {
    const [film, setFilm] = useState(null);

    const {getFilm, getFilmsList, getPeople, getWaifu} = useGhibliService();

    useEffect(() => {
        updateFilm();
    }, []);

    const updateFilm = () => {
        // getFilmsList()
        //     .then(onFilmLoaded);

        getPeople()
            .then(onFilmLoaded);

        // getWaifu()
        //     .then(onFilmLoaded);
    };

    const onFilmLoaded = (film) => {
        console.log(film);
        // setFilm(waifu[4].image);
    }

    return (
        // <img src={waifu} alt="#" />
        <span>тест</span>
    );
};

export default Film;