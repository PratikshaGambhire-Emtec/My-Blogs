import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CreateBlog } from "../services/blogs.service"

const CreateBlogPage = (props) => {
    // state
    const [blogTitle, setTitle] = useState('')
    const [blogContent, setContent] = useState('')
    const [blogTags, setTags] = useState('')
    const [blogDate, setDate] = useState('')

  
    const navigate = useNavigate()
  
    const onCreateBlog = async () => {

      if (blogTitle.length === 0) {
        alert('set title')
      } else if (blogContent.length === 0) {
        alert('set description')
      } else if (blogTags.length === 0) {
        alert('set blog Tag')
      } else {
        const result = await CreateBlog(blogTitle, blogContent, blogTags, blogDate)
        if (result) {
          // redirect to task list
          navigate('/home-page')
        } else {
          alert('Invalid Details')
        }
      }
    }


    return(
        <div className="page">
            <h1 className="header">Create Blog</h1>
            <div className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value)
            }}
            rows={5}
            type="text"
            className="form-control"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input
            onChange={(e) => {
              setTags(e.target.value)
            }}
            type="text"
            className="form-control"
          />{' '}
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            onChange={(e) => {
              setDate(e.target.value)
            }}
            type="date"
            className="form-control"
          />{' '}
        </div>


        <div className="mb-3">
          <button onClick={onCreateBlog} className="btn btn-success">
            Save
          </button>
          <Link
            to="/home-page"
            style={{ marginLeft: '10px' }}
            className="btn btn-danger"
          >
            Cancel
          </Link>
        </div>
      </div>
        </div>
    )
}

export default CreateBlogPage