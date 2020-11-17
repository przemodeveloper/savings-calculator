import React from 'react';
import './Expense.css';

const Expense = ({ name, category, amount }) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
        </tr>
    );
};

export default Expense;