import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import Footer from  './components/footer';
import Service from  './components/service';
import Contact from  './components/contact';
import ProductList from  './components/productList';
import MainSection from  './components/mainSection';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { Link } from "react-router-dom";


function App() {
  return (
      <>

        
        <Router>
        
        <Header />
        
            <Routes>
                <Route  path="/" element={<MainSection/>}/>
                <Route  path="/about" element={<Header/>}/>  
                <Route  path="/service" element={<Service/>}/>    
                <Route  path="contact" element={<Contact/>}/>
            </Routes>
        
        </Router>
        <Footer />


      </>

  );
}

export default App;
