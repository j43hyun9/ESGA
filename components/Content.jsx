import React, { useRef, useState } from 'react'
import './Content.css'



const Content = () => {

// 요소
const [hasImage, setHasImage] = useState(true);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleChange = (event) => {
    console.log(event.target.files); // 선택된 파일 목록 확인
    setHasImage(false);
  };
  const inputRef = useRef(null);
  return (
    <div className = "content">
      <div className='previewImg'>
        <p style={{fontSize: '10px', fontFamily:'fantasy',
            textAlign:'center'
        }}>
          이미지를 여기에 드래그 앤 드롭하세요
          </p>
        <div className='uploadimg'>
        {/* <img src="../public/images/upload.png"
             alt="업로드 이미지"/> */}
        </div>
      </div>
        <p>또는</p>
        <button className='imgBtn'
                onClick={handleClick}>이미지 선택</button>
        <input type="file"
               style={{display:'none'}}
               ref={inputRef}
               onChange={handleChange} />
    </div>
  )
}

export default Content