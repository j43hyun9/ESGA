import React, { useState, useEffect, useRef } from 'react';
import './Content.css';
import Title from './Title';
const Content = ({children}) => {

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const [uploadedImage1, setUploadedImage1] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);



  const handleFileButtonClick = (ref) => {
    ref.current.click();
  };

  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event, setImage) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const clearImage = (setImage) => {
    setImage(null);
  };

  return (
    <div className="content-container">
      <Title></Title>


      <div className="upload-section">
        <div
          className="upload-box upload-file-box"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, setUploadedImage1)}
        >
          {uploadedImage1 ? (
            <>
              <img src={uploadedImage1} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button className="clear-image-button" onClick={() => clearImage(setUploadedImage1)}>X</button>
            </>
          ) : (
            <>
              <p>(드래그하여 넣기)</p>
              <img src="/images/upload.png" alt="업로드 아이콘" />
              <p>또는</p>
              <button onClick={() => handleFileButtonClick(fileInputRef1)}> 파일열기</button>
            </>
          )}
          <input type="file" ref={fileInputRef1} style={{display:'none'}} onChange={(e) => handleFileChange(e, setUploadedImage1)} />
        </div>
        <div
          className="upload-box upload-file-box"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, setUploadedImage2)}
        >
          {uploadedImage2 ? (
            <>
              <img src={uploadedImage2} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button className="clear-image-button" onClick={() => clearImage(setUploadedImage2)}>X</button>
            </>
          ) : (
            <>
              <p>(드래그하여 넣기)</p>
              <img src="/images/upload.png" alt="업로드 아이콘" />
              <p>또는</p>
              <button onClick={() => handleFileButtonClick(fileInputRef2)}> 파일열기</button>
            </>
          )}
          <input type="file" ref={fileInputRef2} style={{display:'none'}} onChange={(e) => handleFileChange(e, setUploadedImage2)} />
        </div>
      </div>
      
      <div className="info-list-section">
        <h3>유기동물 정보 리스트</h3>
        <div className="info-list">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="info-item">
              <img src="/images/bone.png" alt={`정보 ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    
      
    </div>
  );
};

export default Content;
