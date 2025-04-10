import "./Main.css"
const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const ingredientsList = ingredients.map(ingredient => <li>{ingredient}</li>)
  return (
    <main>
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