import React from 'react';
import { useNavigate } from 'react-router-dom';
import { viewBlog } from '../services/blogs.service'
// import { getBloglist, updateBlog, viewBlog } from '../services/Blogs.service';

const Blog = (props) => {
    const { id, blogTitle, blogContent, blogDate, blogTags } = props

    const navigate = useNavigate()

    const viewBlogPage = () => {
        sessionStorage['id'] = id
        navigate('/viewblog')
    }

    return (
       
        <div
            className="card" >
            <div className="card-body">
                <h5 className="card-title">{blogTitle}</h5>
                <p rows={5} className="card-text">{blogContent}</p>
                <h6 className="class-date">{blogDate}</h6>
                <h6 className='class-tags'>{blogTags}</h6>
                <button onClick={viewBlogPage} style={{backgroundColor:'ButtonShadow'}} className="btn btn-success">
                    Read more...
                </button>
            </div>
        </div>
    )
}

export default Blog





// const Blog =(props) =>{
//     const {id, blogTitle, blogContent, blogTags, blogDate, viewBlog} = props
//     return(
//          <div className="card">
//             <div className="card-body" style={{width: '25rem', display:'inline-grid', margin: '10px', height:'250px'}}>
//             <h5 className="card-title">{blogTitle}</h5>
//             <p className="card-text">{blogContent}</p>
//             <p className="card-text">{blogTags}</p>
//             <p className="card-text">{blogDate}</p>
            

//             <a href="/src/pages/blogdeatils.page.js" className="btn btn-primamry">Read Full Blog</a>
//         </div>

//     </div>
//     )
    
// }
// export default Blog