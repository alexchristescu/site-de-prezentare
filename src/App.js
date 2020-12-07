
import './App.css';
import React, {Component} from "react";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import Footer from "./Components/Footer"

class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <Home/>
    );
  }


}


export default App;
