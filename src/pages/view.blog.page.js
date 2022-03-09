import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { deleteComment, getcomments, viewBlog, writeComment } from '../services/blogs.service';
import BlogPage from '../components/blogpage.component';
import Comments from '../components/comments.component';

const BlogViewPage = (props) => {
    const [blog, setBlog] = useState([])
    const navigate = useNavigate()
    const [comments, setComments] = useState([])
    const [contect, setContect] = useState('')

    const logout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userEmail')
        navigate('/signin')
    }

    useEffect(() => {
        loadBlog()
    }, [])

    const createBlog = async () => {
        navigate('/createBlog')
    }

    const delComment= async (id)=>{
        deleteComment(id);
        loadBlog()
    }

    const loadBlog = async () => {
        const result = await viewBlog(sessionStorage.getItem('id'))       
        const responese = await getcomments(sessionStorage.getItem('id'))
        console.log(sessionStorage.getItem('id'))
        if (result) {
            sessionStorage['blogTitle'] = result.blogTitle;
            sessionStorage['blogContent'] = result.blogContent;
            sessionStorage['blogTags'] = result.blogTags;
            sessionStorage['blogDate'] = result.blogDate;

            setBlog(result)
            setComments(responese)
        }
    }

    const myBlogs = async () => {
        navigate('/mybloglist')
    }

    const throwComment = async () => {
        const result = await writeComment(sessionStorage.getItem('id'), contect)
        console.log(contect)
        console.log(result)
        if (result) {
            loadBlog()
            alert('posted successfully')
        }
    }

    return (
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
                  <h1 className="viewpageheader">{sessionStorage.getItem ('blogTitle')}</h1>
                  </div> 

            

            <div className="row">

                <BlogPage
                    blogTitle={sessionStorage.getItem('blogTitle')}
                    blogContent={sessionStorage.getItem('blogContent')}
                    blogTags={sessionStorage.getItem('blogTags')}
                    blogDate={sessionStorage.getItem('blogDate')}/>

            </div>

            <div>
                <h3 className='header' style={{fontFamily: 'cursive', color:'Highlight'}}>Comments</h3>
                <div className='writecomment' style={{marginTop:'-55px'}}>
                    <input onChange={(e) => {
                        setContect(e.target.value)
                    }} type="text" placeholder='Post a comment' className='addContect' />
                    <button className='btn btn-success' onClick={throwComment} style={{margin:'80px',width: '200px', height: '40px', marginbottom: '40px', }}>Publish</button>
                </div>

                <div className="row">
                    {comments.map((comment) => {
                        const { id, userName, userComment, blogId } = comment
                        return (
                            <Comments
                                key={id}
                                id={id}
                                userName={userName}
                                userComment={userComment}
                                delComment={delComment}
                            />
                        )
                    })}
                </div>

                


            </div>
        </div>
    )
}

export default BlogViewPage
