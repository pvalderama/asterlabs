import React from 'react';
import './App.css';

class Transfer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transferValue: 0,
            fromAccount: 0,
            toAccount: 1,
            accounts: [
                {balance: 1000},
                {balance: 1000},
                {balance: 1000}
            ],
            accounts: JSON.parse(localStorage.getItem('accounts') || '[]')

        }
    }

    componentDidUpdate(){
        localStorage.setItem('accounts', JSON.stringify(this.state.accounts));
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            transferValue: parseInt(e.target.value)
        });
    };

    handleFromAccountChange = e => {
        this.setState({
            fromAccount: e.target.value
        })
    }

    handleToAccountChange = e => {
        this.setState({
            toAccount: e.target.value
        });
    };

    transfer = e => {
        let sender = this.state.fromAccount;
        let receiver = this.state.toAccount;
        let transfer = this.state.transferValue;
        let accounts = this.state.accounts;

        if((accounts[sender].balance) - transfer > 0){
            accounts[sender].balance -= transfer;
            accounts[receiver].balance += transfer;
            
            this.setState({
                transferValue: 0,
                accounts: accounts
            })
        } else {
            window.alert('insufficient funds')
        }
    }

    render(){
        return(
            <div className="transfer">
                <form onSubmit={e => this.transfer(e)}>
                    <div className="accounts">
                    <div className="fromAccount">
                    From Account: 
                    <div className="selecter">

                    <select onChange={this.handleFromAccountChange} value={this.state.fromAccount}>
                        <option value={0}>Account 1</option>
                        <option value={1}>Account 2</option>
                        <option value={2}>Account 3</option>
                    </select>
                    </div>
                    </div>
                    <div className="toAccount">
                    To Account:
                    <div className="selecter">

                    <select onChange={this.handleToAccountChange} value={this.state.toAccount}>
                        <option value={0}>Account 1</option>
                        <option value={1}>Account 2</option>
                        <option value={2}>Account 3</option>
                    </select>
                    </div>
                    </div>
                    </div>
                    <div className="input">
                    $<input placeholder="0.00" type="number" value={this.state.transferValue} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                    </div>
                </form>
                <div className="balances">
                    {this.state.accounts.map((account, i) => <li className="balance" key={i}>
                        Account {i+1}: ${account.balance}.00
                    </li>)}
                </div>
            </div>
        )
    }
}

export default Transfer;