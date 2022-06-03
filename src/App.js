import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import ProductList from  './components/productList';
import MainSection from  './components/mainSection';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { Link } from "react-router-dom";


function App() {
  return (
      <>
        <Header />
        
         <Router>
            <Routes>
              <Route  path="/" element={<MainSection/>}/>
              <Route  path="/about" element={<Header/>}/>
            </Routes>
        </Router>

      </>

  );
}

export default App;
