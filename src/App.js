import React, { Component } from 'react';
import './App.css';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import SavingList from './Components/SavingList/SavingList';
import Form from './Components/Form/Form';

class App extends Component {

  state = {
    savings: [
      {id: 1, name: "car", amount: 2000, category: "sales", type: 'saving'},
      {id: 2, name: "parts", amount: 340, category: "sales", type: 'saving'},
      {id: 3, name: "flat", amount: 200, category: "rent", type: 'saving'},
      {id: 4, name: "salary", amount: 500, category: "work", type: 'saving'}
  ],
    expenses: [
      {id: 1, name: "shower gel", amount: 2000, category: "hygiene", type: 'expense'},
      {id: 2, name: "cereals", amount: 5, category: "food", type: 'expense'},
      {id: 3, name: "game", amount: 10, category: "entertainment", type: 'expense'},
      {id: 4, name: "bus ticket", amount: 1, category: "transportation", type: 'expense'}
    ],
    name: '',
    category: '',
    amount: null,
    type: null,
    difference: null,
  }

  calculateDifference = () => {
    let savingsSum = 0;
    let expensesSum = 0;

    const expenseObject = JSON.parse(localStorage.getItem('expenseEntries'));
    const savingObject = JSON.parse(localStorage.getItem('savingEntries'));

    if (savingObject != null) {
      for (let firstSum of savingObject) {
        savingsSum = savingsSum + Number(firstSum.amount);
      }
    } else {
      for (let firstSum of this.state.savings) {
        savingsSum = savingsSum + Number(firstSum.amount);
      }
    }

    if (expenseObject != null) {
      for (let firstSum of expenseObject) {
        expensesSum = expensesSum + Number(firstSum.amount);
      }
    } else {
      for (let firstSum of this.state.expenses) {
        expensesSum = expensesSum + Number(firstSum.amount);
      }
    }

    this.setState({
      difference: savingsSum - expensesSum
    })
  }

  componentDidMount() {

    const expenseObject = JSON.parse(localStorage.getItem('expenseEntries'));
    const savingObject = JSON.parse(localStorage.getItem('savingEntries'));

    console.log(expenseObject, savingObject)

    if(expenseObject !== null) {
      this.setState({expenses: expenseObject})
    }

    if(savingObject !== null) {
      this.setState({savings: savingObject})
    }

    this.calculateDifference();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value
    })

  }

  onDeleteExpenseEntry = (index) => {
    const array = [...this.state.expenses];
    array.splice(index, 1)
    localStorage.setItem('expenseEntries', JSON.stringify(array));
    this.setState({
      expenses: array
    }, this.calculateDifference)


  }

  onDeleteSavingEntry = (index) => {
    const array = [...this.state.savings];
    array.splice(index, 1)
    localStorage.setItem('savingEntries', JSON.stringify(array));
    this.setState({
      savings: array
    }, this.calculateDifference)
  }

  onAddEntry = (event) => {
    event.preventDefault();

    if(this.state.name !== '' &&
      this.state.category !== 'empty' &&
      this.state.amount !== null &&
      this.state.type !== null &&
      this.state.category !== '') {

    const entry = {
      id: this.state.expenses.length + this.state.savings.length + 1,
      name: this.state.name,
      category: this.state.category,
      amount: this.state.amount,
      type: this.state.type
    }

    if(this.state.type === 'saving') {
      this.setState({
        savings: this.state.savings.concat(entry)
      }, this.calculateDifference)
      let entries = [...this.state.savings];
      entries.push(entry);
      localStorage.setItem('savingEntries', JSON.stringify(entries));
    } else {
      this.setState({
        expenses: this.state.expenses.concat(entry)
      }, this.calculateDifference)
      let entries = [...this.state.expenses];
      entries.push(entry);
      localStorage.setItem('expenseEntries', JSON.stringify(entries));
    }

    }
  }


  render() {
    return(
      <div className="container">
        <div className="inner-container">
          <SavingList savings={this.state.savings} deleteEntry={this.onDeleteSavingEntry}/>
          <ExpenseList expenses={this.state.expenses} deleteEntry={this.onDeleteExpenseEntry}/>
        </div>
        <div>
          <Form change={this.handleChange} click={this.onAddEntry}/>
        </div>
        <div className="info">
          <p className="paragraph">Your budget</p>
          <p className={this.state.difference > 0 ? "default green" : "default red" }>{this.state.difference}</p>
        </div>
      </div>
    )
  }
}

export default App;
