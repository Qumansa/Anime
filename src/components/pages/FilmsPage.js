import AppBanner from "../appBanner/AppBanner";
import Films from "../films/Films";

const FilmsPage = () => {
    return (
        <>
            <h1 className="sr-only">Ghibli films</h1>
            <AppBanner title={'the collection of all our animes!'}/>
            <Films/>
        </>
    );
};

export default FilmsPage;