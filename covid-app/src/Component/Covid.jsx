import React,{useState} from "react"
import { useEffect } from "react"
import axios from "axios"
export function Covid(){
    const [covidinfo,setCovidInfo]=useState({})
    const [country,setCountry]=useState([])
   const[isblack,setisBlack]=useState("black","white")
    useEffect(()=>{
        axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res=>{
            console.log(res)
            setCovidInfo({...res.data})
        })
    },[])

    useEffect(()=>{
        axios.get(`https://disease.sh/v3/covid-19/countries`)
        .then(res=>{
            console.log(res)
            setCountry([...res.data])
        })
    },[])

    const changetheme=()=>{
           setisBlack(!isblack) 
    }
    return(
    <>
    
    <div style={{backgroundColor:isblack?"black":"white"}}
     className="covid-info_container1">
    <button onClick={changetheme}>Change mode</button>

        <h1 className="heading">Covid-19 Across World</h1>
        <div className="population">
     <h2>POPULATION</h2>
     <h2>{covidinfo.population}</h2>
     </div>

    <div className="covid-info_container2">
       <div className="active info">
        <h2>ACTIVE</h2>
     <h2>{covidinfo.active}</h2>
     </div>

     <div className="cases info">
        <h2>  CASES</h2>
       <h2>{covidinfo.todayCases}</h2>
       </div>

       <div className="tests info">
        <h2> TESTS</h2>
       <h2>{covidinfo.tests}</h2>
       </div>
       
      
    <div className="deaths info">
        <h2>DEATHS</h2>
       <h2>{covidinfo.todayDeaths}</h2></div>
       <div className="covered  info">
        <h2>RECOVERED</h2>
<h2>{covidinfo.todayRecovered}</h2>
</div>
<div className="updated info">
    <h2>UPDATEDX</h2>
<h2>{covidinfo.updated}</h2>
</div>

{
    country.map((el)=>{
       return(
<div className="country">
<div className="country_img">
<img className="img_co" src={el.countryInfo.flag} alt="" /></div>
<h4>{el.country}</h4>
<h4>{el.updated}</h4>
<h4>{el.population}</h4>
<h4>{el.cases}</h4>

</div>
       )
    })
}


</div>
</div>
   
        </>
    )
}

