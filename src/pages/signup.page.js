import { Link } from 'react-router-dom'

const SignupPage = (props) => {
    return(
        <div>
            <h1 className="header">Sign Up </h1>
            <div className="form">
                <div className="col-md-5">
                 <label className="form-label">Firstname</label>
          <input type="text"className="form-control" />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Lastname</label>
          <input type="text"className="form-control" />
        </div>

        <div className="col-md-5">
                 <label className="form-label">Username</label>
          <input type="text"className="form-control" />
        </div>

        <div className="col-md-5">
          <label className="form-label">Password</label>
          <input type="password"  className="form-control" />
        </div>

        <div className="col-md-5">
          <label className="form-label">Confirm Password</label>
          <input type="password"  className="form-control" />
        </div>

        <div className="col-md-5">
          <div>
            If you have an account Signin <Link to="/signin">here</Link>
          </div>
          <button className="btn btn-success">Signup</button>
        </div>
      </div>
        </div>
    )
}

export default SignupPage