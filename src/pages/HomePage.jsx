import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setTrainerName } from "../store/slices/trainerName.slice"
import '../components/styles/HomePage.css'


const HomePage = () => {

  const inputName = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  }

  return (
      <div className="home__page">
        <img className="home__img" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        <h2 className="home__trainer">Hi trainer!</h2>
        <p className="home__paragraph">To start, please give me your trainer name</p>
        <form onSubmit={handleSubmit}>
          <input className="home__input" ref={inputName} type="text" />
          <button className="home__button">Catch them all!</button>
        </form>
      </div>
  )
}

export default HomePage