import React, { useState } from 'react'
import api from '../axios'

const Test = () => {

    const [data, setData] = useState("");
    // id, pw, userName
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");

    
    const sendData = async (event) => {
        event.preventDefault();
        console.log(data);

        try {
                const res = await api.post("/getData", {
                    id : id,
                    pw : pw,
                    name : name
                });
                console.log(res);

            if(res.data.result === "success") {
                window.alert("회원가입 성공");
            } else {
                window.alert("회원가입 실패");
            }
        } catch (err) {
            console.error("/getData axios error", err);
        }
    }
    

  return (
    <div>
        <form onSubmit={sendData} style = {{width:'300px', display:'flex', flexDirection:'column'}}>
            <div className= 'container'>
                ID : <input type="text" onChange={(event) => {
                    setId(event.target.value);
                }}  /> <br/>
                PW : <input type="text" onChange={(event) => {
                    setPw(event.target.value);
                }}  /> <br/>
                NAME : <input type="text" onChange={(event) => {
                    setName(event.target.value);
                }}  /> <br/>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Test