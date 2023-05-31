import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("data.json").then((resp) => setData(resp.data));
    }, [])

    return <dataContext.Provider>{children}</dataContext.Provider>;
};

export default DataProvider;

//useState lo inicio como un array vacío
//axios es como utilizar fetch pero más simple