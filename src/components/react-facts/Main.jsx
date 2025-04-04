import Rlogo from "./logo.svg" 
const Main = () => {
  return (
    <main>
        <h2>Fun Facts about React</h2>
        <ul className="facts">
            <li>Was first released in 2013.</li>
            <li>Was originally created by Ruben Walke.</li>
            <li>Has well over 100K stars on Github.</li>
            <li>Is maintained by Meta.</li>
            <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>
        <img src={Rlogo} width={500} alt="Rlogo" />
    </main>
  )
}

export default Main