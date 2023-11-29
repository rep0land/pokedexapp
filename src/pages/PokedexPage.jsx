import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/styles/PokedexPage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainerName = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getPokemons()
    } else {
      getByTypePokemons(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }


  return (
      <div>
        <nav className="pokdex__navbar"></nav>

        <header className="pokedex__position__formSelectTrainer">
          <p>Welcome <span>{trainerName}</span>, here you can find your favorite pokemon. Let's go!</p>
          <div className="pokedex__form__select">
            <form onSubmit={handleSubmit}>
              <input className="pokedex__input" ref={inputSearch} type='text' />
              <botton className="pokedex__button">Search</botton>
            </form>
            <SelectType
              setSelectValue={setSelectValue}
            />
          </div>
        </header>

        <div className="cards__global">
          {
            pokemons?.results.filter(cbFilter).map(poke => (
              <PokeCard
                key={poke.url}
                url={poke.url}
              />
            ))
          }
        </div>
      </div >
  )
}


export default PokedexPage