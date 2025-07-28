import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <div className = "content">
        <p>이미지를 여기에 드래그 앤 드롭하세요</p>
        <div className='uploadimg'>
        <img src="../public/images/upload.png"
             alt="업로드 이미지"
             width= {'100px'}  />
        </div>
        <p>또는</p>
        <button className='imgBtn'>이미지 선택</button>
        <input type="file" 
               style={{display:'none'}} />
    </div>
  )
}

export default Content