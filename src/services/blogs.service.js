import axios  from "axios"
import { setting } from "../config"

// export const getblogs = async (status = '') => {
//     const url = setting.server + '/bloggers/getblogs/'
//     const token = sessionStorage['token']
//     let response
//     try {
//       response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
  
//         },
//       })
  
//       response = response.data
//     } catch (ex) {
//       console.log(ex)
//     }
  
//     return response
//   }

export const CreateBlog = async (blogTitle, blogContent, blogTags, blogDate) => {
    const url = setting.server + '/bloggers/createblog/'
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.post(
        url,
        {
          blogTitle,
          blogContent,
          blogTags,
          blogDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
  }