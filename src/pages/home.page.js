import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Blog from '../components/blog.component';
import { getblogs } from '../services/blogs.service';

// import ReadMoreReact from 'read-more-react';
// import usePagination from '../components/pagination';
// import { Pagination } from 'react-bootstrap';
// import { Box, List, ListItem, Divider } from "@material-ui/core";


const HomePage = (props) => {

  
    const [blogs, setBlogs ]= useState([])
    // const [searches, setSearches]=useState('')
    const navigate = useNavigate()

  //   let [page, setPage] = useState(1);
  // const PER_PAGE = 4;

  // const count = Math.ceil(getblogs.length / PER_PAGE);
  // const _DATA = usePagination(getblogs, PER_PAGE);

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };


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
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
    
        // redirect to signin
        navigate('/signin')
      }
    
    return(
        <div className='page'>
          {/* <Box p="5">
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
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
                 ScreenOrientation={ver}
                 )
                })}  */}
      {/* <List >
        {_DATA.Blogs().map(blog => {
                const {id, blogTitle, blogContent, blogTags, blogDate,viewBlog} =blog

          return (
            <ListItem key={Blog.id} listStyleType="disc">
              <span>{blog.sku}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              <span> {blog.blogContent}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              {/* <span>
                <Tag color="#0f4211">${v.msrp}</Tag>
              </span> */}
            {/* </ListItem>
          );
        })}
      </List> */} 

      {/* <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box> */}
            
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" 
                href="#" role="button" 
                id="dropdownMenuLink" 
                data-bs-toggle="dropdown"  
                aria-expanded="false" >
                    Welcome  </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li ><a className="dropdown-item" href="/create-blog  "> Create Blog</a></li>
                <li ><a className="dropdown-item" href="/profile-page">My Profile</a></li>
                <li ><a className="dropdown-item" href="/user-specific">User-Specific</a></li>

                <button onClick={logout} > Logout </button>
                </ul>
                   <h1 className="viewpageheader" style={{fontFamily: 'cursive', color:'white'}}>Blogs</h1> 

                   <form className="d-flex" style={{marginLeft: '140px'}}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>

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

              {/* <div>
              <div className="rows">
                    {searches.map((search) => {
                        const { id, blogTitle, blogTags } = search
                        return (
                            <searches
                                key={id}
                                id={id}
                                blogTitle={blogTitle}
                                blogTags={blogTags}
                              
                            />
                        )
                    })}
                </div>
              </div> */}



        </div>
    )
}

export default HomePage