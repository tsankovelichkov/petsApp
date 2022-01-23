import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom"
import firebase from "../src/utils/firebase";


import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";


function App() {

  const [appUser,setAppUser] = useState({})

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
          setAppUser({
            isAuth:true,
            userData:user._delegate.email
          })
      } else {
        setAppUser({
          isAuth:false,
          userData: null
        })
      }
  })
  }, []);
  

  return (
    <div id="container">
      <Header user={appUser} />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/categories/:category" element={<Main />} />
        <Route path="/pets/details/:id" element={<Details/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
