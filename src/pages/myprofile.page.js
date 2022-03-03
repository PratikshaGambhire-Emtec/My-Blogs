import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from '../services/blogs.service';

const ProfilePage = (props) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userCity, setCity] = useState("");
  const [userState, setState] = useState("");
  const [userCountry, setCountry] = useState("");
  const [userPostalcode, setPostalcode] = useState("");
  const [userBirthDate, setBirthDate] = useState("");
  const [userGender, setGender] = useState("");

  const navigate = useNavigate()

  const onUpdateProfile = async () => {
    
         //console.log(sessionStorage['id'])
         console.log("some text")
         console.log(firstName+" "+lastName)
        const result = await updateProfile(firstName, lastName,sessionStorage.getItem('userEmail'), userPassword, userCity, userState, userCountry, userPostalcode, userBirthDate, userGender)
        if (result) {
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('userEmail')
            navigate('/signin')
        } else {
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('userEmail')
            navigate('/signin')
        }
}

// const logout = () => {

//   sessionStorage.removeItem('token')
//   sessionStorage.removeItem('userEmail')
//   navigate('/signin')
// }

 
   return(
        <div>
            <h1 className="header"> My Profile</h1>
            <form className="row g-3">
            <div className="col-md-6">
    <label for="inputAddress" className="form-label">First Name</label>
    <input onChange={(e) => {
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" id="inputAddress" placeholder="Your First Name"/>
  </div>
  <div className="col-md-6">
    <label for="inputAddress2" className="form-label">Last Name </label>
    <input onChange={(e) => {
                            setlastName(e.target.value)
                        }} type="text" className="form-control" id="inputAddress2" placeholder="Your Last Name"/>
  </div>

  {/* <div className="col-md-6">
        <label for="inputPassword4" className="form-label">Password</label>
        <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password" className="form-control" id="inputPassword4"/>
  </div> */}
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input 
    onChange={(e) => {
               setCity(e.target.value)
                }} 
                        type="text" className="form-control" id="inputCity"/>
  </div>

  <div className="col-md-6">
    <label for="inputState" className="form-label">State</label>
    <select onChange={(e) => {
                            setState(e.target.value)
                        }} id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Maharashtra</option>
      <option>Gujrat</option>
      <option>Kerala</option>
      <option>Karnataka</option>
      <option>Asam</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">Country</label>
    <input onChange={(e) => {
                            setCountry(e.target.value)
                        }} type="text" className="form-control" id="inputCountry"/>
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Postal-Code</label>
    <input onChange={(e) => {
                            setPostalcode(e.target.value)
                        }} type="text" className="form-control" id="inputPostal"/>
  </div>
  

  <div className="col-md-6">
    <label for="inputZip" className="form-label">Birth-Date</label>
    <input onChange={(e) => {
                            setBirthDate(e.target.value)
                        }} type="date" className="form-control" id="inputDate"/>
  </div>

  
  <div className="col-md-6">
    <label for="inputGender" className="form-label">Gender</label>
    <select onChange={(e) => {
                            setGender(e.target.value)
                        }} id="inputGender" className="form-select">
      <option selected>Choose...</option>
      <option>Female</option>
      <option>Male</option>
      <option>Others</option>
    </select>
  </div>

  <div className="col-md-6">
  </div>
  <div className="col-12">
    <button onClick={onUpdateProfile} type="submit" className="btn btn-primary">Update Profile</button>
  </div>
</form>
        </div>
    )
}

export default ProfilePage
