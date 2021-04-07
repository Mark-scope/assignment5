import React, {createContext, useContext, useState } from 'react';


const CompoContext= createContext();

   
const CompoProvider= (props) =>{

    const [username, setUsername] = useState('')
function updateUsername(e){
    setUsername(e.target.value)}

    return(
        <CompoContext.Provider value={{updateUsername}} >
            {props.children}
        </CompoContext.Provider>
    )
}

const useCompoContext = () => useContext(CompoContext)

export { 
    CompoProvider,
     useCompoContext 
}
