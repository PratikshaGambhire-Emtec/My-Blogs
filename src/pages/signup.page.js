import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/user.service'
import BGRN from '../photo/signup.png'



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

        <div className="page1" style={{backgroundColor:  '#fcd2af', padding:'54px', marginLeft:'-55px', marginRight: '-55px', paddingTop:'-80px'}} >
            <h1 className="header" style={{fontFamily: 'cursive', color :'Highlight'}}>Sign Up </h1>
            <div className="form" style={{marginLeft:'445px', fontFamily: 'cursive', color :'steelblue'}}>
                <div className="col-md-5">
                 <label className="form-label">Firstname</label>
          <input  onChange={(e) => {
              setFirstname(e.target.value)
            }}
             type="text"className="form-control" placeholder='Enter your first name' />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Lastname</label>
          <input  onChange={(e) => {
              setLastname (e.target.value)
            }}
             type="text"className="form-control" placeholder='Enter your last name' />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Email</label>
          <input  onChange={(e) => {
              setUseremail(e.target.value)
            }}
             type="email"className="form-control" placeholder='Enter your Email ID' />
        </div>

        <div className="col-md-5">
          <label className="form-label">Password</label>
          <input  onChange={(e) => {
              setPassword(e.target.value)
            }}
             type="password"  className="form-control" placeholder='Enter your Password'/>
        </div>

        <div className="col-md-5">
          <label className="form-label">Confirm Password</label>
          <input type="password"  className="form-control" placeholder='Confirm your Password' />
        </div>

        <div className="col-md-5">
          <div>
            If you have an account Signin <Link to="/signin">here</Link>
          </div>
          <button onClick={onSignup} className="btn btn-success" style={{backgroundColor: 'ButtonShadow'}} >Signup</button>
        </div>
      </div>
        </div>
    )
}

export default SignupPage