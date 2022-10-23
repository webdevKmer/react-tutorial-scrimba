import React from 'react'

function NewsletterForm() {
    const [formData, setFormData] = React.useState({
        email : "",
        password1 : "",
        password2 : "",
        newsletter : false

    })

    function handleChange(e) {
        const {name, value, checked, type} = e.target

        setFormData(prev => ({...prev, [name] : type === "checkbox" ? checked : value}))
        
    }
    function handleClick(e) {
        e.preventDefault()
        console.log(formData);
        if(formData.password1 != formData.password2){
            console.log("passwords do not match");
        } else {
            console.log("Successfully signed up");
            if(formData.newsletter){
            console.log("Thanks for signing up for our newsletter.");

            }
        }

    }
  return (
    <div className="newsletter-form">
        <form action="" method="post">
            <input
            className='input'
            type="email"
            name="email"
            id="email"
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
            />
            <input
            className='input'
            type="password"
            name="password1"
            id="password1"
            placeholder='Password'
            value={formData.password1}
            onChange={handleChange}
            />
            <input
            className='input'
            type="password"
            name="password2"
            id="password2"
            placeholder='Confirm password'
            value={formData.password2}
            onChange={handleChange}
            />
            <div className="check">
                <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                />
                <label htmlFor="newsletter">I want to join the newsletter</label>
            </div>
            <button onClick={handleClick} className='input btn'>Sign Up</button>
        </form>
    </div>
  )
}

export default NewsletterForm