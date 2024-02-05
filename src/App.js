import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from "./Components/HomePage"
import DetailPage from './Components/DetailPage';
import {Routes, Route} from "react-router-dom"

const App = () => {
  const  [selectedItem, setSelectedItem] = useState("")
  return (
    <div>
      <Navbar />
      <Routes>
            <Route path="/" element={<HomePage setSelectedItem={setSelectedItem} />}/>
            <Route path="/detailpage" element={<DetailPage  selectedItem={selectedItem}  setSelectedItem={setSelectedItem}/>}/>
           

      </Routes>

      {/* <Detailpage  selectedItem={selectedItem}/>
      <HomePage setSelectedItem={setSelectedItem}/> */}
    </div>
  );
}

export default App;
