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

    const getPeople = async () => {
        const res = await request(`${_apiBase}people`);

        return res;
    };

    const transformFilm = (film) => {
        return {
            description: film.description ? `${film.description.slice(0, 200)}...` : `The film's description is not available.`, 
            image: film.image,
            originalTitle: film.original_title,
            originalTitleRomanised: film.original_title_romanised,
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
        getFilm,
        getFilmsList,
        getIdsList,
        getPeople,
        loading, 
    };
};

export default useGhibliService;