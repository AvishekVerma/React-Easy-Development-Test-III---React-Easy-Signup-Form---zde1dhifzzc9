import React, {setState } from 'react'
//import { signUpFormValidation } from './utils/validation.js'



const App = () => {
//   const [state, setState] = useState({
//     'name':'',
//   'email':'',
//     'password':''
//   })
  
  return (
    <div>
      <label>name</label>
      <input id="name" type="text" />
      <label>email</label>
      <input id="email" type="text" />
      <label>password</label>
      <input id="password" type="text" /><br></br>
      <label>consent</label>
      <input id="consent" type="checkbox" /><br></br>
      <button type='submit' onClick={signUpFormValidation} >Signup</button>
    </div>
  )
}


export default App;
