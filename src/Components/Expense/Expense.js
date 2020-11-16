import React from 'react';
import './Expense.css';

const Expense = ({ name, category, amount }) => {
    return(
        <div className="expense">
            <p>{name}</p>
            <hr/>
            <p className="middle">{amount}</p>
            <hr/>
            <p>{category}</p>
        </div>
    );
};

export default Expense;