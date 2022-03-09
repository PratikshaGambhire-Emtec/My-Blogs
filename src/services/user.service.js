import axios from "axios"
import { setting } from '../config'

export const signup =async (firstName, lastNAme, userEmail, userPassword)=>{
    const url= setting.server + '/bloggers/signup'

    let result
    try{
     result = await axios.post(url,{
       firstName, lastNAme, userEmail, userPassword
    })
        result = result.data
}catch(ex){
    result= ex
}
    return result

}

export const signin =async (userEmail, userPassword)=>{
    const url= setting.server + '/bloggers/signin'

    let result
    try{
     result = await axios.post(url,{
        userEmail, userPassword
    })
    result = result.data
}catch(ex){
    console.log(ex)
}
    return result

}



export const updateprofile = async (firstName, lastName, userEmail, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender) => {
    const url = setting.server + `/bloggers/updateprofile`
    let result
    try {
        result = await axios.put(url,
            {
                firstName, lastName, userEmail, userCity, userState, userCountry,
                userPostalCode, userBirthDate, userGender,
            },
        )
        result = result.data
    }
    catch (ex) {
        console.log(ex)
    }
    sessionStorage['firstName'] = result.firstName
    sessionStorage['lastName'] = result.lastName
    sessionStorage['userCity'] = result.userCity
    sessionStorage['userState'] = result.userState
    sessionStorage['userCountry'] = result.userCountry
    sessionStorage['userPostalCode'] = result.userPostalCode
    sessionStorage['userBirthDate'] = result.userBirthDate
    sessionStorage['userGender'] = result.userGender
    return result
}