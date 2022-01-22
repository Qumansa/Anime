import { useHttp } from "../hooks/http.hook";

const useGhibliService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://ghibliapi.herokuapp.com/';

    const getFilm = async (id) => {
        const res = await request(`${_apiBase}films/${id}`);
        
        return transformFilm(res);
    };

    const getFilmsList = async () => {
        const res = await request(`${_apiBase}films`);
        
        return res.map(transformFilms);
    };

    const getIdsList = async () => {
        const res = await getFilmsList()
            .then(filmsList => filmsList.map(film => film.id));

        return res;
    };

    const getCharacters = async () => {
        const characterHaku = await request(`${_apiBase}people/267649ac-fb1b-11eb-9a03-0242ac130003`);
        const characterSheeta = await request(`${_apiBase}people/598f7048-74ff-41e0-92ef-87dc1ad980a9`);
        const characterSan = await request(`${_apiBase}people/ebe40383-aad2-4208-90ab-698f00c581ab`);
        const characterJiji = await request(`${_apiBase}people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec`);
        const characterTotoro = await request(`${_apiBase}people/d39deecb-2bd0-4770-8b45-485f26e1381f`);
        const characterChihino = await request(`${_apiBase}people/8228751c-bdc1-4b8d-a6eb-ca0eb909568f`);

        return [characterHaku, characterSheeta, characterSan, characterJiji, characterTotoro, characterChihino];
    };

    const transformFilm = (film) => {
        return {
            description: film.description,
            director: film.director,
            id: film.id,
            image: film.image,
            originalTitle: film.original_title,
            originalTitleRomanised: film.original_title_romanised,
            producer: film.producer,
            releaseDate: film.release_date,
            runningTime: film.running_time,
            rating: film.rt_score,
            title: film.title,
        };
    };

    const transformFilms = (films) => {
        return {
            description: films.description, 
            id: films.id,
            image: films.image,
            originalTitle: films.original_title,
            originalTitleRomanised: films.original_title_romanised,
            title: films.title,
        };
    };

    return {
        clearError, 
        error, 
        getCharacters,
        getFilm,
        getFilmsList,
        getIdsList,
        loading, 
    };
};

export default useGhibliService;