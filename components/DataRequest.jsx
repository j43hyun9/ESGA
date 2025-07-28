import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DataRequest = () => {
  const [data, setData] = useState();
  const [cnt, setCnt] = useState();
  useEffect(() => {
    const fetchAxios = async () => {
      try {
        const url = 'https://apis.data.go.kr/1471000/CsmtcsIngdCpntInfoService01/getCsmtcsIngdCpntInfoService01';
        const params = {
          serviceKey: "nbTTLaGM711YLlKS65c/v+XHHrx4zTVuNgzhZpXDPF3fNbsGjIMQVgUc2sNuVuKi0j2b/Pfh9/+8wP/4suRqqA==",
          pageNo: 2,
          numOfRows: 100,
          type: 'json',
          INGR_KOR_NAME: ''
        }

        // 프록시 경로(/api)를 붙여 요청
        const res = await axios.get(url,{ params })
        console.log("res : " , url, {params});
        console.log("res.data : ",res.data)
        setData(res.data.body.items)
      } catch (error) {
        console.log("axios err 발생", error)
      }
    }
    fetchAxios()
  }, [])

  const targetList = data;
  console.log("targetList : " , targetList);
  return( 
    <div>
        {targetList?.map(i=>(
            <div style={{display:'flex', flexDirection: 'row', width:'1000px',
                height:'30px'
            }}>
                <h5>
                    {/* <span>카스(CAS) 등록번호:</span> {i.CAS_NO != null && <h6>{i.CAS_NO}</h6>} */}
                    {/* 영문명: {i.INGR_ENG_NAME != null && <h6>{i.INGR_ENG_NAME}</h6>} */}
                    <li>{i.INGR_KOR_NAME != null && i.INGR_KOR_NAME} </li>
                    {/* 이명 :{i.INGR_SYNONYM != null && <h6>{i.INGR_SYNONYM}</h6>}
                    기원이름 :{i.ORIGINAL_MAJOR_KOR_NAME != null && <h6>{i.ORIGINAL_MAJOR_KOR_NAME}</h6>} */}
                </h5>
                <br />

                
            </div>
        ))}
    </div>
  )
}

export default DataRequest
