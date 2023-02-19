import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from '../assets/pokeball.png'
import Bulbasaur from '../assets/bulbasaur.gif'
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";
const Pokemon = () => {
	const [isLoading, setIsLoading] = useState(false)
	const {name} = useParams();
	const [pokemon, setPokemon] = useState<PokemonDetails>()
	const navigate = useNavigate() 

	useEffect(() => {
	  async function getPokemon(){
		setIsLoading(true)
		await waitFor(1000)
		const fetchedPokemon = await fetchPokemon(name as string)
		setPokemon(fetchedPokemon)
		setIsLoading(false)
	  }
	  getPokemon();
	}, [])
	if(isLoading || !pokemon) return <LoadingScreen/>
	
	return (
		<>
			<button
			className="flex items-center outline-none px-12 pt-12" 
			onClick={() => navigate(-1)}>
				<img 
				className="w-6 h-6 mr-1"
				src={PokeballImg} 
				alt=""/> 
				Regresar	
			</button>
			<div>
				<main className="flex flex-col items-center my-24">
					<div className="mx-12 font-bold text-2xl">
						{name?.toUpperCase()}
					</div>
					<div>
						{pokemon?.id}
					</div>
					<div>
						<img
						className="w-24 mx-5" 
						src={pokemon?.imgSrc} 
						alt={pokemon?.name} />
					</div>
					<div>HP: {pokemon?.hp}</div>
					<div>Attack: {pokemon?.attack}</div>
					<div>Defense: {pokemon?.defense}</div>
				</main>
			</div>
			<Footer/>
		</>
	);
};

export default Pokemon;
