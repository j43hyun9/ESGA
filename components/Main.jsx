import React from 'react'
import Content from './Content'
// import './Main.css'
const Main = ({ children }) => {
  return (
    <div style={{display:'flex'}}>
        <Content></Content>
        <Content></Content>
    </div>
  )
}

export default Main