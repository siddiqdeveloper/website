import React, { useState, useEffect } from "react";
import * as Scroll from 'react-scroll';

let Button    = Scroll.Button;
let Element   = Scroll.Element;
let Events    = Scroll.Events;
let scroll    = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


function Header(){

    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
          console.log('begin', arguments);
        });
    }, []);

    return (
        <div className="App">
            <nav id="scrollspy" className="navbar navbar-light bg-light navbar-expand-lg fixed-top" data-spy="affix" data-offset-top="20">
              <div className="container">
                  <a className="navbar-brand" href="#"></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="#home">Home</a>
                          </li>
                          <li className="nav-item">
                            
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#service">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#testmonial">Testmonial</a>
                          </li>
                        
                          <li className="nav-item">
                              <a className="nav-link" href="#contact">Contact</a>
                          </li>
                          
                      </ul>
                  </div>
              </div>
          </nav>
        </div>
    );

}


export default Header;
 