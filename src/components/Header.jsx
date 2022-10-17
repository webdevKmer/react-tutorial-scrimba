import logo from './../images/logo.svg';

function Header() {
    return (
        <div className="header">
            <nav>
                <img src={logo} alt="React Logo" />
            </nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
} 

export default Header