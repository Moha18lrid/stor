import React from 'react'
import './Loginsingup.css'
function Loginsingup() {
    return (
        <div className='B_LoginSingup'>
            <div className='LoginSingup'>
                <h2>Sing Up hear</h2>
                <div className="inputs">
                    <input type="text" placeholder='enter your name' />
                    <input type="email" placeholder='enter your email' />
                    <input type="password" placeholder='enter your password' />
                </div>
                <div className="agreed">
                    <label class="container"> Agree on the terms & privecy policy.
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <button>Continue</button>
                <p>Already have an acount <span>Login</span></p>
            </div>
        </div>
    )
}

export default Loginsingup
