import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../../style/_base.sass';

import AppHeader from "../appHeader/AppHeader";
import {CharactersPage, FilmPage, FilmsPage, MainPage, Page404} from '../pages';


const App = () => {
	return (
		<Router>
			<AppHeader/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/characters" element={<CharactersPage/>}/>
				<Route path="/films" element={<FilmsPage/>}/>
				<Route path="/films/:id" element={<FilmPage/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</Router>
	);
};

export default App;
