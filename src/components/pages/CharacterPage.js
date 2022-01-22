import AppBanner from "../appBanner/AppBanner";
import Character from "../character/Character";

const CharacterPage = () => {
    return (
        <>
            <AppBanner title={'detailed information about chosen character!'}/>
            <Character/>
        </>
    );
};

export default CharacterPage;