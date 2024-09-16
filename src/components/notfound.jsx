import React from 'react';
import "./notfound.css";
import { Link } from 'react-router-dom';
const Notfound = ({found}) => {


    return (
        <div className='notfound'>
            
                <img className='notfoundimg' src="https://cdn-icons-png.flaticon.com/128/8423/8423644.png" alt="" />
                <h4>No {found} found <Link className='Link' to={"/"}><h6 className='gotohome'>Go To Home</h6></Link></h4>
            
            
        </div>
    );


}

export default Notfound;
