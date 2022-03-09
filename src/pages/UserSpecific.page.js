import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getmyblogs } from '../services/blogs.service';
import Blog from '../components/blog.component';

const UserSpecific = (props) => {
     const [blogs, setBlogs ]= useState([])
     const navigate = useNavigate()

     useEffect(()=>{
          loadblogs()
      }, [])


      const loadblogs = async () => {
          const result = await getmyblogs()
          if (result) {
            setBlogs(result)
          }  
        }

        const logout = () => {
          // remove the token and username from sessionStorage
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('username')
      
          // redirect to signin
          navigate('/signin')
        }

        const viewBlog = ()=>{
          loadblogs();
      }
      
        return(
          <div className="page">
                 
              
               <div className="dropdown">
                  <a className="btn btn-secondary dropdown-toggle" 
                  href="#" role="button" 
                  id="dropdownMenuLink" 
                  data-bs-toggle="dropdown"  
                  aria-expanded="false" >
                      Welcome  { sessionStorage.getItem('firstName')} </a>
  
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li ><a className="dropdown-item" href="/create-blog  "> Create Blog</a></li>
                  <li ><a className="dropdown-item" href="/profile-page">My Profile</a></li>
                  <li ><a className="dropdown-item" href="/user-specific">User-Specific</a></li>
  
                  <button onClick={logout} > Logout </button>
                  
                  </ul>
                  <h1 className="viewpageheader">My Blogs</h1> 
                                    
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
export default UserSpecific