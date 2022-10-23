import React from 'react'

function NewsletterForm() {
  return (
    <div className="newsletter-form">
        <form action="" method="post">
            <input
            type="email"
            name="email"
            id="email"
            placeholder='Email address'
            />
            <input
            type="password"
            name="password1"
            id="password1"
            placeholder='Password'
            />
            <input
            type="password"
            name="password2"
            id="password2"
            placeholder='Confirm password'
            />
            <div className="check">
                <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                />
                <label htmlFor="newsletter">I wan to join the newsletter</label>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default NewsletterForm