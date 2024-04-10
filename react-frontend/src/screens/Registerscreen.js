import axios from 'axios'

import React ,{ useState, useEffect }  from 'react'

function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    async function register(){
        if(password === cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            try {
                const result = await axios.post('http://localhost:5000/api/users/register', user);
                console.log(result.data);
                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
                alert('Registration successful')
            } catch (error) {
                console.log(error);
            }
        }
        else{
            alert('There is some error. Please try again!')
        }
    }
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <div className='bs'>
                    <h2>Register</h2>
                    <input type="text" className='form-control' placeholder='name' 
                    value= {name} onChange={(e) => {setname(e.target.value)}} />
                    <input type="text" className='form-control' placeholder='email' 
                    value= {email} onChange={(e) => {setemail(e.target.value)}} />
                    <input type="password" className='form-control' placeholder='password'
                    value= {password} onChange={(e) => {setpassword(e.target.value)}} />
                    <input type="password" className='form-control' placeholder='confirm password'
                    value= {cpassword} onChange={(e) => {setcpassword(e.target.value)}} />

<button className='btn btn-primary mt-3' onClick={register}>Register</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Registerscreen
