import AppBanner from "../appBanner/AppBanner";
import FilmsList from "../filmsList/FilmsList";

const Films = () => {
    return (
        <>
            <AppBanner title={'the collection of all our animes!'}/>
            <FilmsList/>
        </>
    );
};

export default Films;