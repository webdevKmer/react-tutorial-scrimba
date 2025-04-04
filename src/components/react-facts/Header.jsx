import logo from "../../logo.svg"
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} width={60} alt="React Logo" />
            <span>ReactFacts</span>
        </div>
    </header>
  )
}

export default Header