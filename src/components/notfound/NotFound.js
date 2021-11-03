import React from 'react';
import { Link } from 'react-router-dom';
import img from '../notfound/not.png'
const NotFound = () => {
    return (
        <div>
            <img src={img}></img><br />
            <Link to='/home' ><button className="bg-dark btn text-white m-3">Back</button></Link>
        </div>
    );
};

export default NotFound;