import React, { Component } from 'react';
import Expense from '../Expense/Expense';
import './ExpenseList.css';
// import expenses from '../../expenses.json';

class ExpenseList extends Component {

    // state = {
    //     expenses: [
    //         {id: 1, name: "shower gel", amount: 3, category: "hygiene"},
    //         {id: 2, name: "cereals", amount: 5, category: "food"},
    //         {id: 3, name: "game", amount: 10, category: "entertainment" },
    //         {id: 4, name: "bus ticket", amount: 1, category: "transportation"}
    //     ]
    // }

    render() {
        return(
            <div>
                <div className="headers">
                    <p>Name</p>
                    <p>Amount</p>
                    <p>Category</p>
                </div>
                {this.props.expenses.map(expense => {
                    return <Expense
                        key={expense.id}
                        name={expense.name}
                        amount={expense.amount}
                        category={expense.category}/>
                })}
            </div>
        );
    }
};

export default ExpenseList;