import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../../style/_base.sass';

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import Films from "../pages/Films";

const App = () => {
	return (
		<Router>
			<AppHeader/>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/films" element={<Films/>}/>
			</Routes>
		</Router>
	);
};

export default App;
