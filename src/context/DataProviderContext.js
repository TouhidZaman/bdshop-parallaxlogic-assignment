import React, { createContext, useState } from 'react';

export const DataProviderContext = createContext()

const DataProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [keywords, setKeywords] = useState('');

    const values = {
        cart, 
        setCart,
        keywords,
        setKeywords
      };
   
    return (
        <DataProviderContext.Provider value={values}>
            {children}
        </DataProviderContext.Provider>
    );
};

export default DataProvider;