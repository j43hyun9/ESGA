import React, { useState } from 'react'
import api from '../axios'
const TestLogin = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const sendData = async (event) => {
        event.preventDefault();

        try {
                const res = await api.post("/login", {
                    id : id,
                    pw : pw
                });
                console.log(res);

            if(res.data.result === "success") {
                setName(res.data.name);
                let test = "";
                test = res.data.name;
                window.alert(test+ "님 환영합니다");
            } else {
                window.alert("잘못된 아이디 혹은 비밀번호입니다.");
            }
        } catch (err) {
            console.error("/getData axios error", err);
        }
    }
  return (
    <div>
        <hr />
        <form onSubmit={sendData}>
            ID : <input type="text" onChange={(event) => {
                    setId(event.target.value);
                }}  />
            PW : <input type="text" onChange={(event) => {
                    setPw(event.target.value);
                }}  />
            <input type="submit" value="로그인" />
        </form>
    </div>
  )
}

export default TestLogin