import React, {useState} from 'react';
import cartContext from './cart-context';

const Store = ({children}) => {

    const initialState = {
        items: [],
        counter: 0
    }

    const [appState, setAppState] = useState(initialState);
    console.log(appState);

    return ( 

        <cartContext.Provider value={appState}>
          {children}
        </cartContext.Provider>
    )
}

export default Store;