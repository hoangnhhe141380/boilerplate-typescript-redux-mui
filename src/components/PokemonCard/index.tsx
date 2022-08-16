import React from 'react'
import PokemonDataProps from '../../model/PokemonDataProps'

const PokemonCard = ({ ...pokemon }: PokemonDataProps) => {
    return (
        <>
            <h3>{pokemon?.name}</h3>
        </>
    )
}

export default PokemonCard