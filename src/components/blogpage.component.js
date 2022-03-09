import { error } from 'jquery';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBlogs, viewBlog } from '../services/blogs.service';


const BlogPage = (props) => {
    const { id, blogTitle, blogContent, blogDate, blogTags } = props

    const navigate = useNavigate()


    const onDelete= async() =>{

        const result = await deleteBlogs(sessionStorage.getItem('id')) 
        if ( result ) {
            navigate('/home-page')
        }else{
            console.log('cannot delete')
        }

    
    }
    


    return (
        <div
            className="cards"
        >
            <div className="card-body">
                <h5 className="card-title">{blogTitle}</h5>
                <p rows={150} className="card-content">{blogContent}</p>
                <h6 className="class-date">{blogDate}</h6>
                <h6 className='class-tags'>{blogTags}</h6>

                
                
            </div>
            <button onClick={onDelete} className='Delete'>Delete Blog</button>
        </div>
        
        
    )
}

export default BlogPage
