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
    const url = setting.server + '/bloggers/updateprofile/'
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

  export const deleteblogs = async (id) => {
    const url = setting.server + `/bloggers/deleteblog`
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
  