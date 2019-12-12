
import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";

import QrCamera from "./QrCamera"
import QrCodeContainer from './components/QrCodeContainer';



const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/camera" component={QrCamera} />
        <Route path="/make" component={QrCodeContainer} />
      </BrowserRouter>
    </div>
  );
  }
export default App;


const Home =()=>(
<div>
  <h1>Hello world</h1>
</div>
)


const NavBar =()=>{
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/camera">カメラ</Link>
          </li>
          <li>
            <Link to="/make">コード作成</Link>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
}



