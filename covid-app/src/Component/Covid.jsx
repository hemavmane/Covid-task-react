import React,{useState} from "react"
import { useEffect } from "react"
import axios from "axios"
export function Covid(){
    const [covidinfo,setCovidInfo]=useState({})
   const[isblack,setisBlack]=useState("black","white")
    useEffect(()=>{
        axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res=>{
            console.log(res)
            setCovidInfo({...res.data})
        })
    },[])

    const changetheme=()=>{
           setisBlack(!isblack) 
    }
    return(
    <>
    
    <div style={{backgroundColor:isblack?"black":"white"}}
     className="covid-info_container1">
    <button onClick={changetheme}>
        Change mode</button>
        <h1>Covid-19 Across World</h1>
    <div className="covid-info_container2">
       
     <p className="info1 info">TOTAL ACTIVE<br />{covidinfo.active}</p>
       <p className="info2 info">TOTAL TODAYCASES<br />{covidinfo.todayCases}</p>
       <p className="info3 info">TOTAL TESTS<br />{covidinfo.tests}</p>
       </div>
       <div className="covid-info_container3">
       <span className="info4 info">TOTAL TODAYDEATHS<br />{covidinfo.todayDeaths}</span>
<p className="info5 info">TOTAL TODAYRECOVERED<br />{covidinfo.todayRecovered}</p>
<p className="info6 info">TOTAL UPDATED<br />{covidinfo.updated}</p>
</div>
     </div>
        </>
    )
}

