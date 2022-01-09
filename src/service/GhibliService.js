import { useHttp } from "../hooks/http.hook";

const useGhibliService = () => {
    const {loading, request, error, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://ghibliapi.herokuapp.com/';

    const getFilm = async (id) => {
        const res = await request(`${_apiBase}films/${id}`);
        
        return res;
    };

    const getFilmsList = async () => {
        const res = await request(`${_apiBase}films`);

        return res;
    };

    const getWaifu = async () => {
        const res = await request(`https://api.jikan.moe/v3/anime/1`);

        return res;
    };

    const getPeople = async () => {
        const res = await request(`${_apiBase}people`);

        return res;
    };

    return {
        clearError, 
        error, 
        loading, 
        process, 
        setProcess,
        getFilm,
        getFilmsList, 
        getPeople,
        getWaifu
    };
};

export default useGhibliService;