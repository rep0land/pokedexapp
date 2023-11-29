import { useEffect, useRef } from "react"
import useFetch from "../../hooks/UseFetch"


const SelectType = ( { setSelectValue } ) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [ infoTypes, getInfoTypes ] = useFetch(url)

    useEffect(() => {
        getInfoTypes()
    }, [])

    const selectElement = useRef()

    const handleChange = () => {
        setSelectValue(selectElement.current.value)
    }
    

  return (
    <select ref={selectElement} onChange={handleChange}>
        <option value='allPokemons'>All Pokemons</option>
        {
            infoTypes?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType