import AppHeader from "../AppHeader/AppHeader";
import RandomFilm from "../RandomFilm/RandomFilm";
import Film from "../Film/Film";

import '../../style/_base.sass';

const App = () => {
	return (
		<>
			<AppHeader/>
			<RandomFilm/>
			<Film/>
		</>
	);
}

export default App;
