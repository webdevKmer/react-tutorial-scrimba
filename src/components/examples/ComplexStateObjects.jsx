import React from "react"
import avatar from "../../logo.svg"
import starFilled from "../../starGold.jpeg"
import starEmpty from "../../starEmpty.png"
import "./ComplexStateObjects.css"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

/**
     * Challenge: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                    {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
