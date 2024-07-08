import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Pic from "./components/Pic";
import Rooms from "./components/Rooms";
import Carou from "./components/Carou";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
     <Navbar/>
      <Pic/>
      <Rooms/>
      <Carou/>
      <Footer/>
    
    </div>
  );
}

export default App;
