import { Route, Routes } from "react-router-dom"
import {} from 'react-router'


import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";


function App() {

  return (
    <div id="container">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/categories/:category" element={<Main />} />
        <Route path="/pets/details/:id" element={<Details/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
