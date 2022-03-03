const Blog =(props) =>{
    const {id, blogTitle, blogContent, blogTags, blogDate, viewBlog} = props
    return(
         <div className="card">
            <div className="card-body" style={{width: '25rem', display:'inline-grid', margin: '10px', height:'200px'}}>
            <h5 className="card-title">{blogTitle}</h5>
            <p className="card-text">{blogContent}</p>
            <p className="card-text">{blogTags}</p>
            <p className="card-text">{blogDate}</p>

            <a href="/src/pages/blogdeatils.page.js" className="btn btn-primamry">Read Full Blog</a>
        </div>

    </div>
    )
    
}
export default Blog