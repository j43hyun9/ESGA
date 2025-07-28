import React, { useRef, useState } from 'react';
import api from '../axios';
import './Login.css'
const Login = () => {

    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

// 회원가입
const handleSignUp = (e) => {
  console.log("e : ", e);
  if(e.type === "click") {
    console.log("click");
    if(container.current.classList.contains("right-panel-active"))
      container.current.classList.remove("right-panel-active");
    else
      container.current.classList.add("right-panel-active");
  }
  

};
// 로그인
const handleSignIn = (e) => {
  console.log("e : ", e);
  console.log("sign in");
  if(e.type === "click") {
    console.log("click : 로그인 성공?");
    console.log(container);
    // container.current.classList.add("right-panel-active");
  }
}; 



const sendSignIn = async (event) => {
        event.preventDefault();
        console.log("sendSignIn");
        try {
                const res = await api.post("/login", {
                    mail : mail,
                    pw : pw
                });
                console.log(res);

            if(res.data.result === "success") {
                setName(res.data.name);
                let name = "";
                name = res.data.name;
                window.alert(name+ "님 환영합니다");
            } else {
                window.alert("잘못된 아이디 혹은 비밀번호입니다.");
            }
        } catch (err) {
            console.error("/getData axios error", err);
        }
    }

    const sendSignUp = async (event) => {
        event.preventDefault();
        console.log("sendJoin");
        try {
                const res = await api.post("/join", {
                    name : name,
                    mail : mail,
                    pw : pw
                });
                console.log(res);

            if(res.data.result === "success") {
                setName(res.data.name);
                let name = "";
                name = res.data.name;
                window.alert(name+ "님 가입을 축하합니다.");
            } else {
                window.alert("회원가입 실패 ");
            }
        } catch (err) {
            console.error("/getData axios error", err);
        }
    }
  
  const container = useRef(null)
  return (
     <>
      <div className="container" id="container" ref={container}>
        <div className="form-container sign-up-container">
          {/* 회원가입 버튼 */}
          <form onSubmit={sendSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="form_btn" type="submit" >회원가입</button>
            
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={sendSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="form_btn" type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignUp}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>


     </>
  )
}


export default Login