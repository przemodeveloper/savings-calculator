import React, { Component } from 'react';
import Saving from '../Saving/Saving';
import './SavingList.css';
// import savings from '../../savings.json';

class SavingList extends Component {

    // state = {
    //     savings: [
    //         {id: 1, name: "car", amount: 2000, category: "sales"},
    //         {id: 2, name: "parts", amount: 340, category: "sales"},
    //         {id: 3, name: "flat", amount: 200, category: "rent"},
    //         {id: 4, name: "salary", amount: 500, category: "work"}
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
                {this.props.savings.map(saving => {
                    return <Saving
                        key={saving.id}
                        name={saving.name}
                        amount={saving.amount}
                        category={saving.category}/>
                })}
            </div>
        );
    }
};

export default SavingList;