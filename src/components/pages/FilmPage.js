import AppBanner from '../appBanner/AppBanner';
import Film from '../../film/Film';

const FilmPage = () => {
	return (
		<>
			<AppBanner title={'detailed information about chosen anime!'} />
			<Film />
		</>
	);
};

export default FilmPage;
