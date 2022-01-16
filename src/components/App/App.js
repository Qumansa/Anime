import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../../style/_base.sass';

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import FilmPage from "../pages/FilmPage";

const App = () => {
	return (
		<Router>
			<AppHeader/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/film" element={<FilmPage/>}/>
			</Routes>
		</Router>
	);
};

export default App;
