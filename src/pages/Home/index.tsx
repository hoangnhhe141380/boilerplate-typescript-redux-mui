/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import apis from '../../config/apis';
import PokemonNameProps from '../../model/PokemonNameProps';
import PokemonDataProps from '../../model/PokemonDataProps';
import PokemonCard from '../../components/PokemonCard';

function Home() {

    const [listPokemon, setListPokemon] = useState<PokemonDataProps[]>([])

    useEffect(() => {
        const fetchPokemons = async () => {

            const response = await apis.get(`pokemon?limit=20&offset=0`)
            response.data.results.forEach(async (pokemon: PokemonNameProps) => {
                const pokemonItem = await apis.get(`pokemon/${pokemon.name}`)
                setListPokemon((p) => [...p, pokemonItem.data])
            })
        }
        fetchPokemons()
    }, [])

    return (
        <>
            <Navbar />

            {listPokemon.map((pokemon) => {

                return (
                    <PokemonCard {...pokemon} />
                )
            }
            )}
        </>
    );
}

export default Home;
