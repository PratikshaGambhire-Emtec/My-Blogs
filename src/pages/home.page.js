import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getblogs } from '../services/blogs.service';

const HomePage = (props) => {

//     // load tasks by calling the get api
//   const loadTasks = async (status, func) => {
//     const result = await getblogs(status)
//     if (result) {
//       func(result)
//     }
//   }

    const navigate = useNavigate()

    const logout = () => {
        // remove the token and username from sessionStorage
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
    
        // redirect to signin
        navigate('/signin')
      }
    
    return(
        <div>
            <h1 classNameName="header">Home Page</h1>
            
            <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"  aria-expanded="false">
    Welcome
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li ><a className="dropdown-item" href="/create-blog  "> Create Blog</a></li>
    <li ><a className="dropdown-item" href="/profile-page">My Profile</a></li>
    <button onClick={logout} > Logout </button>
  </ul>
</div>


        </div>
    )
}

export default HomePage