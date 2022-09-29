import { createContext, useEffect, useState } from "react";
const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/quotes')
            .then(res => res.json())
            .then(quotes => setData(quotes));
    }, []);
    const values = {
        data,
        setData
    }
    return (
        <QuoteContext.Provider value={values}>
            {children}
        </QuoteContext.Provider>
    )
};
export default QuoteContext;