import React from 'react';
import Expense from '../Expense/Expense';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteEntry }) => {

        let headers = ['Name', 'Amount', 'Category'];

        return(
            <div>
                <h1 id="title">Expenses</h1>
                <table id="expenses">
                    <tbody>
                        <tr>{headers.map((header, index) => {
                            return <th key={index}>{header.toUpperCase()}</th>
                        })}
                        </tr>
                        {expenses.map((expense, index) => {
                            return <Expense
                                click={() => deleteEntry(index)}
                                key={expense.id}
                                name={expense.name}
                                amount={expense.amount}
                                category={expense.category}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
};

export default ExpenseList;