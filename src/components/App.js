import React from 'react'



const App = () => {
  
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
      <button type='submit'>Signup</button>
    </div>
  )
}


export default App;
