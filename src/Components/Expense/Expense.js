import React from 'react';
import './Expense.css';

const Expense = ({ name, category, amount, click }) => {
    return(
        <tr onClick={click}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
        </tr>
    );
};

export default Expense;