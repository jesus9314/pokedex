import { Link } from "react-router-dom";
import Pikachu from "../assets/pikachu.png";
import Pokeball from "../assets/pokeball.png";
import Pointer from "../assets/pointer.png";
const Footer = () => {
	return (
		<footer className="w-full bg-gradient-to-r from-blue-400 to-red-400 py-6 fixed bottom-0">
			<div className="max-w-7xl flex justify-evenly gap-2 mx-auto">
				<Link to="/pokemons">
					<img src={Pikachu} alt="Pikachu" className="w-12" />
				</Link>
				<Link to="/pokemons">
					<img src={Pokeball} alt="Pokeball" className="w-12" />
				</Link>
				<Link to="/pokemons">
					<img src={Pointer} alt="Pointer" className="w-12" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
