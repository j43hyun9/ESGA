import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Content from '../components/Content'
import Sample from '../components/Sample'
function App() {
  
  return (
    <>
      <Header></Header>
        <Routes>
          {/* 첫 화면 */}
          <Route path='/' element={<Main />}>
            <Route element={<Sample/>}></Route>
          </Route> 
          {/* <Route path='/list' element={<ProductList list={data}/>}></Route>
          <Route path='/detail/:num' element={<ProductDetail list={data}/>}></Route> */}
        </Routes>
      <Footer></Footer>
    
    </>
  )
}

export default App
