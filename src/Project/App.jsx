import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './About';

import Company from './Company';
import User from './User';
import Login from './Login';
import LoginForm from '../LoginForm';


import Home from './Home';
import CompanyUser from './CompanyUser';
import Usersignup from './Usersignup';
import   CompanyLogin from './CompanyLogin';
import CompanySignUp from './CompanySignUp';
import UserHomePage from './UserHomePage';
import CompanyHomePage from './CompanyHomePage';

function App() {
  return (
 <>


<BrowserRouter>
<Routes>
   
    <Route exact path='/' element={<Home/>} ></Route>
    <Route exact path='/company' element={<Company/>}></Route>
    <Route path='/user' element={<User/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='/CompanyUser' element={<CompanyUser></CompanyUser>}></Route>
    <Route path='loginform' element={<LoginForm></LoginForm>}></Route>
    <Route path='usersignup' element={<Usersignup></Usersignup>}></Route>
    <Route path="companylogin" element={<CompanyLogin></CompanyLogin>}></Route>
    <Route path='companysignup' element={<CompanySignUp></CompanySignUp>}></Route>
    <Route exact path='/userhomepage' element={<UserHomePage/>}></Route>
    <Route exact path='/company-home' element={<CompanyHomePage/>}></Route>

</Routes>
</BrowserRouter>



 </>
  );
}

export default App;