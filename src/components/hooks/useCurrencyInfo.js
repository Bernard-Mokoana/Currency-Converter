import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates || {});
        setLoading(false);
    }) 
    .catch((err) => {
        console.log("Falied to fetch currency data:", err);
        setLoading(false);
    });
    }, [currency]);


    return {data, loading};
}


export default useCurrencyInfo