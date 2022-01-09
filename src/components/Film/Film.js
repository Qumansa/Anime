import { useState, useEffect } from "react";

import useGhibliService from '../../service/GhibliService';

const Film = () => {
    const [film, setFilm] = useState(null);

    const {getFilm, getFilmsList, getPeople} = useGhibliService();

    useEffect(() => {
        updateFilm();
    }, []);

    const updateFilm = () => {
        getFilmsList()
            .then(onFilmLoaded);

        // getPeople()
        //     .then(onFilmLoaded);
    };

    const onFilmLoaded = (film) => {
        // setFilm(film);
    }

    return (
        // <img src={film} alt="#" />
        <span>тест</span>
    );
};

export default Film;