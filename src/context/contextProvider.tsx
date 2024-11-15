import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();


export const ContextProvider = ({ children }) => {
    
  const[detailsdata, setDetailsdata]= useState("")
    const [active, setActive] = useState(false);

    const fetchDetails = async () => {
      const { data } = await axios.get('http://localhost:3001/details');
      setDetailsdata(...data)
     
    };
  
    return (
      
      <StateContext.Provider value={{active, setActive, fetchDetails, detailsdata, setDetailsdata}}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);