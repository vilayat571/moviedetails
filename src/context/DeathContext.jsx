import { createContext, useEffect, useState } from "react";
const DeathContext = createContext();
export const DeathContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/deaths')
            .then(res => res.json())
            .then(veri => setData(veri))
    }, []);
    const values = {
        data,
        setData
    }
    return (
        <DeathContext.Provider value={values}>
            {children}
        </DeathContext.Provider>
    )
};

export default DeathContext;