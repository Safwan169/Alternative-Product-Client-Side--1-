import React, { useContext } from 'react';
import { myContext } from './Authentication';

const Contex = () => {
    const auth=useContext(myContext)
    // console.log(auth)
    return auth
       
}

export default Contex;