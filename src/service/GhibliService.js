import { useHttp } from "../hooks/http.hook";

const useGhibliService = () => {
    const {clearError, error, loading, request, setLoading} = useHttp();

    const _apiBase = 'https://ghibliapi.herokuapp.com/';

    const getCharacter = async (id) => {
        const res = await request({
            url: `${_apiBase}people/${id}`,
            isLoaded: false
        });
        
        return transformCharacter(res);
    };

    const getCharacters = () => {
        return Promise.all([
            request({url: `${_apiBase}people/8228751c-bdc1-4b8d-a6eb-ca0eb909568f`}),
            request({url: `${_apiBase}people/267649ac-fb1b-11eb-9a03-0242ac130003`}),
            request({url: `${_apiBase}people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec`}),
            request({url: `${_apiBase}people/ebe40383-aad2-4208-90ab-698f00c581ab`}),
            request({url: `${_apiBase}people/598f7048-74ff-41e0-92ef-87dc1ad980a9`}),
            request({url: `${_apiBase}people/d39deecb-2bd0-4770-8b45-485f26e1381f`}),
        ]);
    };

    const getFilm = async (id) => {
        const res = await request({url: `${_apiBase}films/${id}`});
        
        return transformFilm(res);
    };

    const getFilmsList = async () => {
        const res = await request({url: `${_apiBase}films`});
        
        return res.map(transformFilms);
    };

    // const getIdsList = async () => {
    //     const res = await getFilmsList()
    //         .then(filmsList => filmsList.map(film => film.id));

    //     return res;
    // };

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

    const transformCharacter = (character) => {
        return {
            age: character.age && character.age !== 'NA' ? character.age : 'Secret!',
            eyeColor: character.eye_color,
            films: character.films,
            gender: character.gender && character.gender !== 'NA' ? character.gender : 'Secret!',
            hairColor: character.hair_color,
            id: character.id,
            name: character.name
        };
    };

    return {
        clearError, 
        error, 
        getCharacter,
        getCharacters,
        getFilm,
        getFilmsList,
        // getIdsList,
        loading, 
        setLoading
    };
};

export default useGhibliService;