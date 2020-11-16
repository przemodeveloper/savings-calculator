import React from 'react';
import './Saving.css';

const Saving = ({ name, category, amount}) => {
    return(
        <div className="saving">
            <p>{name}</p>
            <hr/>
            <p>{amount}</p>
            <hr/>
            <p>{category}</p>
        </div>
    );
};

export default Saving;