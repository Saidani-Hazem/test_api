import React from 'react';
import { useState } from 'react';
import "./count.css"
import Nav from '../components/nav';

const Count = () => {

    const [nbr, setnbr] = useState(0)


    

    return (
        <>
        
        <div className='countcontainer'>
        
              <div className="count">
                <h4>{nbr}</h4>
               
                <button onClick={()=>{nbr - 10 <= 0 ? setnbr(0): setnbr(nbr-10)}}>-10</button>
                <button onClick={()=>{nbr -1 <= 0 ? setnbr(0): setnbr(nbr-1)}}>-</button>
                <button onClick={()=>setnbr(0)}>0</button>
                <button onClick={()=>setnbr(nbr+1)}>+</button>
                <button onClick={()=>setnbr(nbr+10)}>+10</button>
                </div>
              
        </div>
        <Nav/>
    </>
    );
}

export default Count;
