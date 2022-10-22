import AppBanner from '../appBanner/AppBanner';
import Film from '../../Film/Film';

const FilmPage = () => {
	return (
		<>
			<AppBanner title={'detailed information about chosen anime!'} />
			<Film />
		</>
	);
};

export default FilmPage;
