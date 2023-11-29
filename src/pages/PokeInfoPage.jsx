import { useParams } from "react-router-dom"
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>


    </article>
  )
}

export default PokeInfoPage