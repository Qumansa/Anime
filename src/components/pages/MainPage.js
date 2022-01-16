import RandomFilm from "../randomFilm/RandomFilm";
import Film from "../film/Film";

const MainPage = () => {
    return (
        <>
            <h1 className="sr-only">Ghibli Portal</h1>
            <RandomFilm/>
			<Film/>
        </>
    );
};

export default MainPage;