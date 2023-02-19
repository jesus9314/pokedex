import Pokedex from "../assets/pokedex.png";

const LoadingScreen = () => {
	return (
		<div className="h-screen flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-blue-600 to-green-500">
			<img className="w-1/3 h-1/3 max-w-xs max-h-xs object-cover" src={Pokedex} alt="Pokedex" />
			<p className="text-3xl font-bold text-white">Cargando...</p>
		</div>
	);
};

export default LoadingScreen;
