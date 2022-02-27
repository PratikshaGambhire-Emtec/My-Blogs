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
