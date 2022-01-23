import RandomFilm from "../randomFilm/RandomFilm";
import Company from "../company/Company";

const MainPage = () => {
    return (
        <>
            <h1 className="sr-only">Ghibli Portal</h1>
            <RandomFilm/>
            <Company/>
        </>
    );
};

export default MainPage;