import AppBanner from '../appBanner/AppBanner';
import Characters from '../characters/Characters';

const CharactersPage = () => {
	return (
		<>
			<h1 className="sr-only">Ghibli characters</h1>
			<AppBanner title={'the collection of our characters!'} />
			<Characters />
		</>
	);
};

export default CharactersPage;
