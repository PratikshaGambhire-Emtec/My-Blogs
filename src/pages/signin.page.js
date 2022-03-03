import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../services/user.service'
import BGRN from '../photo/BGRN.jpg'

const SigninPage = (props) => {

  const [userEmail, setUseremail] = useState('')
  const [userPassword, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignin = async () => {
    if (userEmail.length === 0) {
      alert('enter email ID')
    } else if (userPassword.length === 0) {
      alert('set password')
    } else {
      const result = await signin(userEmail, userPassword)
      if (result) {
        const { token } = result

        sessionStorage['token'] = token
        sessionStorage['userEmail'] = userEmail

        navigate('/home-page')
      } else {
        alert('invalid username or password')
      }
    }
  }

    return(
        <div>
            <div className="interface">
            <div className="content">
    <div className="container">

      <div className="row">
        <div className="col-md-6">
          <img src={ BGRN } alt="pic" className="img-fluid" />
        </div>

         <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8"> 
              <div className="mb-4">
              <h2 >Sign In</h2>
            </div>

          
            <p className="mb-4"> “Create something people want to share.” - John Jantsch</p>
              <div className="form">
                <label for="username">Email</label>
                <input onChange={(e) => {
              setUseremail(e.target.value)
            }} 
            type="email" className="form-control" id="email" />
              </div>

              <div className="form mb-4">
                <label for="password">Password</label>
                <input onChange={(e) => {
              setPassword(e.target.value)
            }} 
                 type="password" className="form-control" id="password" />
              </div>

              <div className="mb-4">
          <div> If you don't have account Signup <Link to="/signup">here</Link> </div>
          <button onClick={onSignin} className="btn btn-success"> Signin </button>
        </div>

            </div>
          </div>
          
        </div> 
        
      </div>
    </div>
  </div>

            </div>
        </div>
    )
}

export default SigninPage