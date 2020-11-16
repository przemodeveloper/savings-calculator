import React, { Component } from 'react';
import './App.css';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import SavingList from './Components/SavingList/SavingList';
import Form from './Components/Form/Form';

class App extends Component {

  state = {
    savings: [
      {id: 1, name: "car", amount: 2000, category: "sales"},
      {id: 2, name: "parts", amount: 340, category: "sales"},
      {id: 3, name: "flat", amount: 200, category: "rent"},
      {id: 4, name: "salary", amount: 500, category: "work"}
  ],
    expenses: [
      {id: 1, name: "shower gel", amount: 3, category: "hygiene"},
      {id: 2, name: "cereals", amount: 5, category: "food"},
      {id: 3, name: "game", amount: 10, category: "entertainment" },
      {id: 4, name: "bus ticket", amount: 1, category: "transportation"}
    ],
    name: '',
    category: '',
    amount: null,
    type: null,
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value
    })

    console.log(this.state.name, this.state.category, this.state.amount, this.state.type);
  }


  render() {
    return(
      <div className="container">
        <div className="inner-container">
          <SavingList savings={this.state.savings} />
          <ExpenseList expenses={this.state.expenses}/>
        </div>
        <div>
          <Form change={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default App;
