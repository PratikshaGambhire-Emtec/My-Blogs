import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteComment, getblogs, viewBlog } from '../services/blogs.service';

const Comments = (props) => {
    const { id, userName, userComment, blogId, delComment } = props

    const onButtonDelete= () =>{
        alert('Deleted Successfully')
       const result= delComment(id);
       if(result){
           Navigate('/viewBlog')
       }
      
    }
    
    return (
        <div className="cardo" >
            <div className="card-body" style={{margin: '-60px', paddingLeft:'70px'}} >
                <h6 className='card-text'> {userName} Commented:</h6>
                <p className='card-text' style={{margin:'20px',fontFamily: 'cursive' }} >{userComment}</p>

                <button style={{margin:'80px'}} className='btn btn-danger' onClick={onButtonDelete} >Delete</button>
            </div>
        </div>
    )
}

export default Comments