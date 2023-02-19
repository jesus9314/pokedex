import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Items, Pokemon, Pokemons } from "./pages";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/pokemons/:name" element={<Pokemon />} />
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/items" element={<Items />} />
				<Route path="/" element={<Pokemons />} />
			</Routes>
		</Router>
	);
};

export default App;
