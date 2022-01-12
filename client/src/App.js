import { Route, Routes } from "react-router-dom"


import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div id="container">
      <Header />
      <Routes>
      <Route path='/categories/:category' element={<Main />} />
      <Route path='/' exact element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
