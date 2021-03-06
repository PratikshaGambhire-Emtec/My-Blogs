import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetailsPage from "./pages/blogdeatils.page";
import CreateBlogPage from "./pages/createblog.page";
import HomePage from "./pages/home.page";
import ProfilePage from "./pages/myprofile.page";
import SigninPage from "./pages/signin.page";
import SignupPage from "./pages/signup.page";
import UserSpecific from "./pages/UserSpecific.page";
import BlogViewPage from "./pages/view.blog.page";




function App() {
   return ( <div className="container" >
   <BrowserRouter>
      
    <Routes>
    
       <Route path="/" element={<SigninPage />} />     
       <Route path="signup" element={<SignupPage />} />
       <Route path="signin" element={<SigninPage />} />
       <Route path="home-page" element={<HomePage />} />
       <Route path="create-blog" element={<CreateBlogPage />} />
       <Route path="blog-details" element={<BlogDetailsPage />} />
       <Route path="profile-page" element={<ProfilePage />} />
       <Route path="user-specific" element={<UserSpecific />} />
       <Route path="viewblog" element={<BlogViewPage />} /> 
       
    </Routes>
   </BrowserRouter>
   
  </div>
   )
}

export default App;
