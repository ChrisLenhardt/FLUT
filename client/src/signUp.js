import {useState} from 'react'

export default function SignUp(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return(
        
        <div class="signUp">
        <div class='signUpDiv'>
        <h1>
          CREATE ACCOUNT
        </h1>
        </div>
        
        <form>
          <div class='signUpDiv'>
          <input
            class='signUpInput'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          </div>
          <br></br>
          <div class='signUpDiv'>
          <input
            class='signUpInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          </div>
          <br></br>
          <div class='signUpDiv'>
          <input
            class='signUpInput'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          </div>
        </form>
        <div class='signUpDiv'>
        <button class='signUpButton'>
          SUBMIT
        </button>
        </div>
  
      </div>
    );
}