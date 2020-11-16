import React from 'react';
import './Form.css';

const Form = () => {
    return(
        <form className="form">
            <div className="radio">
                <label>
                    <input type="radio" value="saving" name="type" />
                Saving
                </label>
                <label>
                    <input type="radio" value="expense" name="type" />
                Expense
                </label>
            </div>
            <div>
                <input type="number" name="number"/>
            </div>
            <div>
                <input type="text" name="text"/>
            </div>
            <div>
                <select name="categories">
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