import entries from "./data"
import Entry from "./Entry"

const Main = () => {
    console.log(entries);
    const entriesList = entries.map(entry => <Entry key={entry.id} {...entry}/>)
  return (
    <main>
        <h1>Entries</h1>
        {entriesList}
    </main>
  )
}

export default Main