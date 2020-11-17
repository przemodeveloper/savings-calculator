import React, { Component } from 'react';
import Saving from '../Saving/Saving';
import './SavingList.css';

class SavingList extends Component {

    render() {

        let headers = ['Name', 'Amount', 'Category'];

        return(
            <div>
                <h1 id="title">Savings</h1>
                <table id="savings">
                    <tbody>
                        <tr>{headers.map((header, index) => {
                            return <th key={index}>{header.toUpperCase()}</th>
                        })}
                        </tr>
                        {this.props.savings.map(saving => {
                            return <Saving
                                key={saving.id}
                                name={saving.name}
                                amount={saving.amount}
                                category={saving.category}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default SavingList;