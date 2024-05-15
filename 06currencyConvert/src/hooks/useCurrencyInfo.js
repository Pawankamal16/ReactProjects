// custom hook - use built in hook like - useState,useRef..

import { useState,useEffect } from "react";


//making hook,create a functional component and return a method
function useCurrencyInfo(currency){
    const[data,setData]= useState({})
  //api call
  //useEffect - automatically fetch call
  useEffect( ()=>{
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  .then( (res) => res.json())
  .then( (res)=>setData(res[currency]) )
  console.log(data);

  }, [currency])
  console.log(data);
  return data
}

export default useCurrencyInfo;

