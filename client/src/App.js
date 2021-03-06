import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import firebase from "../src/utils/firebase";
import AuthContext from "./contexts/Authcontext";


import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import AddPet from "./components/AddPet/AddPet";
import MyPets from "./components/MyPets/MyPets";
import Edit from "./components/Edit/Edit";
import DeletePet from "./components/DeletePet/DeletePet";


function App() {

  let navigate = useNavigate()

  const [appUser, setAppUser] = useState({})

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAppUser({
          isAuth: true,
          userData: user._delegate.email
        })
      } else {
        setAppUser({
          isAuth: false,
          userData: null
        })
      }
    })
  }, []);


  return (
    <div id="container">
      <AuthContext.Provider value={appUser}>
      <Header user={appUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories/:category" element={<Main />} />
        <Route path="/pets/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-pet" element={<AddPet/>} />
        <Route path="/my-pets" element={<MyPets/>} />
        <Route path='/my-pets/:id/edit' element={<Edit/>} />
        <Route path='/my-pets/:id/delete' element={<DeletePet/>} />
      </Routes>
      <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
