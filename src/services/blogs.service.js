import axios  from "axios"
import { setting } from "../config"

export const getblogs = async () => {
    const url = setting.server + '/bloggers/bloglist/'
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
  
        },
      })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
  }

  export const getmyblogs = async () => {
    const url = setting.server + '/bloggers/getmyblogs/'
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
  
        },
      })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
  }

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

  export const updateProfile = async (firstName, lastName, userEmail,userCity, userState, userCountry, userPostalCode, userBirthDate, userGender) => {
    const url = setting.server + '/bloggers/updateprofile'
    console.log("inside updare profile of "+userCountry)
    let response
    try {
      response = await axios.post(
        url,
        { 
          firstName,
          lastName,
          userEmail,
          userCity,
          userState,
          userCountry,
          userPostalCode,
          userBirthDate,
          userGender
        }
      )
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
    sessionStorage['firstName'] = response.firstName
    sessionStorage['lastName'] = response.lastName
    sessionStorage['userCity'] = response.userCity
    sessionStorage['userState'] = response.userState
    sessionStorage['userCountry'] = response.userCountry
    sessionStorage['userPostalCode'] = response.userPostalCode
    sessionStorage['userBirthDate'] = response.userBirthDate
    sessionStorage['userGender'] = response.userGender
    return response
  }

export const viewBlog = async (id) => {
  const url = setting.server + `/bloggers/getblogbyid`
  const token = sessionStorage['token']
  //console.log(id + " in viewblog")
  let response
  try {
      response = await axios.post(url,
          {
              id,
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

export const deleteBlogs = async (id) => {
  const url = setting.server + `/bloggers/deleteblog`
  //console.log(id)
  const token = sessionStorage['token']
  let response
  try {
      response = await axios.post(
          url,
          {
              id
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


export const writeComment = async (id, userComment) => {
  const url = setting.server + '/bloggers/WriteComment/'
  const token = sessionStorage['token']
  let response
  try {
      response = await axios.post(
          url,
          {
              id,
              userComment,
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

export const getcomments = async (id) => {

  const url = setting.server + `/bloggers/getcomments/${id}`
  const token = sessionStorage['token']
  console.log('into comments '+id)
  let response

  try {
      response = await axios.get(url, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      })

      response = response.data
  }
  catch (ex) {
      throw ex;
  }
  return response;
}

export const deleteComment = async (id) => {
  const url = setting.server + `/bloggers/deletecomments/${id}`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    response = response.data
  } catch (ex) {
    console.log(ex)
  }

  return response
}

export const searchblogs = async (id) => {
  const url = setting.server + `/bloggers/getblogs/`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    response = response.data
  } catch (ex) {
    console.log(ex)
  }

  return response
}
  