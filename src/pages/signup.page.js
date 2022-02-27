import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/user.service'


const SignupPage = (props) => {
  
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [userEmail, setUseremail] = useState('')
  const [userPassword, setPassword] = useState('')
  //const [userPassword, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignup = async () => {
    if (firstName.length === 0) {
      alert('please enter First Name')
    }else if (lastName.length === 0) {
      alert('please enter username')
    }else if (lastName.length === 0) {
      alert('please enter username')
    } else if (userPassword.length === 0) {
      alert('please enter password')
    } else {
      
      const result = await signup(firstName, lastName, userEmail, userPassword)
      if (result) {
     
        navigate('/signin')
      }
    }
  }
    return(
        <div>
            <h1 className="header">Sign Up </h1>
            <div className="form">
                <div className="col-md-5">
                 <label className="form-label">Firstname</label>
          <input  onChange={(e) => {
              setFirstname(e.target.value)
            }}
             type="text"className="form-control" />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Lastname</label>
          <input  onChange={(e) => {
              setLastname (e.target.value)
            }}
             type="text"className="form-control" />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Email</label>
          <input  onChange={(e) => {
              setUseremail(e.target.value)
            }}
             type="email"className="form-control" />
        </div>

        <div className="col-md-5">
          <label className="form-label">Password</label>
          <input  onChange={(e) => {
              setPassword(e.target.value)
            }}
             type="password"  className="form-control" />
        </div>

        <div className="col-md-5">
          <label className="form-label">Confirm Password</label>
          <input type="password"  className="form-control" />
        </div>

        <div className="col-md-5">
          <div>
            If you have an account Signin <Link to="/signin">here</Link>
          </div>
          <button onClick={onSignup} className="btn btn-success">Signup</button>
        </div>
      </div>
        </div>
    )
}

export default SignupPage