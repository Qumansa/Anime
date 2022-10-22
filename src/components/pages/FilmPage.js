import AppBanner from '../appBanner/AppBanner';
import Film from '../film/film';

const FilmPage = () => {
	return (
		<>
			<AppBanner title={'detailed information about chosen anime!'} />
			<Film />
		</>
	);
};

export default FilmPage;
