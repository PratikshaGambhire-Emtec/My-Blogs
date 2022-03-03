import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Blog from '../components/blog.component';
import { getblogs } from '../services/blogs.service';
import ReadMoreReact from 'read-more-react';


const HomePage = (props) => {

  
    const [blogs, setBlogs ]= useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        loadblogs()
    }, [])

    // load blogs by calling the get api
  const loadblogs = async () => {
    const result = await getblogs()
    if (result) {
      setBlogs(result)
    }  
  }

  

  const viewBlog = ()=>{
      loadblogs();
  }
 

    const logout = () => {
        // remove the token and username from sessionStorage
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
    
        // redirect to signin
        navigate('/signin')
      }
    
    return(
        <div>
            <h1 className="header">Home Page</h1>     
            
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" 
                href="#" role="button" 
                id="dropdownMenuLink" 
                data-bs-toggle="dropdown"  
                aria-expanded="false" >
                    Welcome { sessionStorage.getItem('firstName')}</a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li ><a className="dropdown-item" href="/create-blog  "> Create Blog</a></li>
                <li ><a className="dropdown-item" href="/profile-page">My Profile</a></li>
                <button onClick={logout} > Logout </button>
                </ul>
                </div>

                {blogs.map(blog =>{
                const {id, blogTitle, blogContent, blogTags, blogDate,viewBlog} =blog
                return (
                <Blog
                 key = {id}
                 id={id}
                 blogTitle={blogTitle} 
                 blogContent={blogContent} 
                 blogTags={blogTags} 
                 blogDate={blogDate} 
                 viewBlog={viewBlog}/>
                 )
                })}               




        </div>
    )
}

export default HomePage