import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Pikachu from "../assets/pikachu.png";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false)
	const [query, setQuery] = useState("");
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	useEffect(() => {
		const fetchAllPokemons = async () => {
            setIsLoading(true)
            await waitFor(1000)
			const allPokemons = await fetchPokemons();
			setPokemons(allPokemons);
            setIsLoading(false)
		};
    fetchAllPokemons();
	}, []);

    if(isLoading){
        return <LoadingScreen/>
    }

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
      });

	return (
		<>
			<Header query={query} setQuery={setQuery} />
			<main>
				<nav className="divide-y divide-slate-400 mb-24">
					{filteredPokemons?.slice(0, 151).map((pokemon) => (

						<Link 
                        key={pokemon.id} 
                        to={`pokemons/${pokemon.name.toLowerCase()}`} 
                        className="w-full flex p-2 gap-4">
							<img className="w-12 h-12 m-2" src={pokemon.imgSrc} alt={pokemon.name} />
							<div className="flex flex-col justify-center">
								<span className="text-green-500 font-bold underline">{pokemon.name}</span>
								<span>{pokemon.id}</span>
							</div>
						</Link>
                    ))}
				</nav>
			</main>
			<Footer />
		</>
	);
};

export default Pokemons;
