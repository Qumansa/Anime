import { useHttp } from "../hooks/http.hook";

const useGhibliService = () => {
    const {loading, request, error, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://ghibliapi.herokuapp.com/';

    const getFilm = async (id) => {
        const res = await request(`${_apiBase}films/${id}`);
        
        return transformFilm(res);
    };

    const getFilmsList = async () => {
        const res = await request(`${_apiBase}films`);

        return res;
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

    return {
        clearError, 
        error, 
        loading, 
        process, 
        setProcess,
        getFilm,
        getFilmsList,
        getIdsList,
        getPeople,
    };
};

export default useGhibliService;