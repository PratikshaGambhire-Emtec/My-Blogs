import { Link } from 'react-router-dom'

const SigninPage = (props) => {
    return(
        <div>
            <div className="interface">
            <div className="content">
    <div className="container">

      <div className="row">
        <div className="col-md-6">
          <img src="../Images/blogging.jpg" alt="Image" className="img-fluid" />
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
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="form mb-4">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>

              <div className="mb-4">
          <div> If you don't have account Signup <Link to="/signup">here</Link> </div>
          <button  className="btn btn-success"> Signin </button>
        </div>

              {/* <input type="submit" value="Log In" className="btn btn-block btn-primary" /> */}

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