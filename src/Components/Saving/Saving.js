import React from 'react';
import './Saving.css';

const Saving = ({ name, category, amount}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
        </tr>
    );
};

export default Saving;