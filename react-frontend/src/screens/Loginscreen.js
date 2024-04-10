import React , { useState, useEffect }  from 'react'
import axios from 'axios'

function Loginscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    async function login(){
        
            const user={
                email,
                password,
            }
            try {
                const result = await axios.post('http://localhost:5000/api/users/login', user);
                console.log(result.data);
                alert("Login successful");
                localStorage.setItem('currentUser', JSON.stringify(result.data)); // Corrected stringify and storing result.data
                window.location.href = '/home';
            } catch (error) {
                console.log(error);
                alert('There is some error, please try again');
            } 
        
    }
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <div className='bs'>
                    <h2>Login</h2>
                    <input type="text" className='form-control' placeholder='email' 
                    value= {email} onChange={(e) => {setemail(e.target.value)}} />
                    <input type="password" className='form-control' placeholder='password'
                    value= {password} onChange={(e) => {setpassword(e.target.value)}} />
                    

<button className='btn btn-primary mt-3' onClick={login}>Login</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Loginscreen
