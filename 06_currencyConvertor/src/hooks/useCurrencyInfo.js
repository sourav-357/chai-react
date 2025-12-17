// required hook to create a new custom hook
import { useState, useEffect } from "react";

// creating our new custom hook which takes 'currency' as input parameter
function useCurrencyInfo(currency) {
  // setting up the data as per the resposnse of the 'API'
  const [data, setData] = useState({});

  // This 'API' needs to be called once the 'currency' is changed --> that is why we took 'currency' as input 'parameter'
  // using the useEffect() hook as we need to call this 'API' on every change in 'currency' value
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // convert the json data to normal data
      .then((res) => setData(res.currency)) // set the 'data' as per the respond from 'API' and we only want 'currency' part of 'res'
      .then(console.log(data));
  }, [currency]); // 'currency' is passed as the changed parameter

  // return value for the function
  console.log(data);
  return data;
}

export default useCurrencyInfo;
