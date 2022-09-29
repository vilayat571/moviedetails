import { createContext, useEffect, useState } from "react";
const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
    const [data,setData]=useState('');
    const [limit,setLimit]=useState(8);
    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=4`)
        .then(res=>res.json())
        .then(veri=>setData(veri));
    },[limit]);
    const values={
        data,
        setData,
        setLimit,
        limit
    }
    return (
        <CharacterContext.Provider value={values}>
            {children}
        </CharacterContext.Provider>
    )
};
export default CharacterContext;