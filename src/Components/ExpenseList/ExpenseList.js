import React, { Component } from 'react';
import Expense from '../Expense/Expense';
import './ExpenseList.css';

class ExpenseList extends Component {

    render() {

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
                        {this.props.expenses.map(expense => {
                            return <Expense
                                key={expense.id}
                                name={expense.name}
                                amount={expense.amount}
                                category={expense.category}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ExpenseList;