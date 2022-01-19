import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../../style/_base.sass';

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import FilmsPage from "../pages/FilmsPage";
import FilmPage from "../pages/FilmPage";
import Page404 from "../pages/Page404";

const App = () => {
	return (
		<Router>
			<AppHeader/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/films" element={<FilmsPage/>}/>
				<Route path="/films/:id" element={<FilmPage/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</Router>
	);
};

export default App;
