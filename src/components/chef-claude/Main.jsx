import "./Main.css"
import "./Form.css"
import { useState } from "react"


const Main = () => {
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

  const ingredientsList = ingredients.map(ingredient => <li>{ingredient}</li>)
  const handleChange = (e) => {
    setIngredient(e.target.value)
  }
  const addIngredient = (e) => {
    e.preventDefault()
    setIngredients(prev => [...prev, ingredient])
    setIngredient("")
  }

  return (
    <main>
      <form onSubmit={addIngredient}>
        <input onChange={handleChange} type="text" name="ingredient" id="" placeholder="e.g banana" value={ingredient}/>
        <button>Add ingredient</button>
    </form>
      <section>
        <h2>Ingredients on Hand :</h2>
        <ul>
            {ingredientsList}
        </ul>
      </section>
    </main>
  )
}

export default Main