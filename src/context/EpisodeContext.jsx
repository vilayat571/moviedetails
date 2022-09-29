import { createContext, useEffect, useState } from "react";

const EpisodeContext = createContext();

export const EpisodeContextProvider = ({ children }) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/episodes')
            .then(res => res.json())
            .then(episodes => setData(episodes));
    }, []);
    const values = {
        data,
        setData
    }
    return (
        <EpisodeContext.Provider value={values}>
            {children}
        </EpisodeContext.Provider>
    )
};
export default EpisodeContext;