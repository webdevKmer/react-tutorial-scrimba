import logo from "../../logo.svg"
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div className="header">
            <img src={logo} width={60} alt="React Logo" />
            <span>Chef Claude</span>
        </div>
    </header>
  )
}

export default Header