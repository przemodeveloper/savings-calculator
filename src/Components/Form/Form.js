import React from 'react';
import './Form.css';

const Form = (props) => {
    return(
        <form className="form">
            <div className="radio">
                <label>
                    <input type="radio" value="saving" name="type" onChange={props.change}/>
                Saving
                </label>
                <label>
                    <input type="radio" value="expense" name="type" onChange={props.change}/>
                Expense
                </label>
            </div>
            <div>
                <input type="number" name="amount" onChange={props.change}/>
            </div>
            <div>
                <input type="text" name="name" onChange={props.change}/>
            </div>
            <div>
                <select name="category" onChange={props.change}>
                    <option value="sales">Sales</option>
                    <option value="work">Work</option>
                    <option value="rent">Rent</option>
                    <option value="food">Food</option>
                    <option value="hygiene">Hygiene</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transportation">Transportation</option>
                </select>
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;