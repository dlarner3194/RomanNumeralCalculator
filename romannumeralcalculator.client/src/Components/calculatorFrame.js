import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import InputField from "./InputField";
import Button from "./Button";

class calculatorFrame extends Component {
    constructor(props) {
        super(props);
        this.state = { operator: '', value: '', value1: '' };
    }

    handleChange(event) {
        this.setState({ value: this.state.value + event.target.innerHTML });
        console.log(event.target.innerHTML);
    }

    clear(event) {
        this.setState({ value: '' });
    }

    calculate(event){
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: value,
                secondParam: operator,
                thirdParam: value1
            })
        })
        
        this.setState({ value: this.state.value + event.target.innerHTML });
        console.log(event.target.innerHTML);
    }

    render() {
        return (
            <main class="frame">
                <InputField value={this.state.value} />
                <div class="row">
                    <Button label="Clear" handleClick={this.clear.bind(this)} />
                    <Button label="Clear All" handleClick={this.clear.bind(this)}/>                 
                    <Button label="="  />
                </div>
                <div class="row">
                    <Button label="I" handleClick={this.handleChange.bind(this)}/>
                    <Button label="VIII" handleClick={this.handleChange.bind(this)} />
                    <Button label="IX" handleClick={this.handleChange.bind(this)} />
                    <Button label="-" handleClick={this.calculate.bind(this)} />
                </div>                 
                {/*}
                <div class="row">
                    <Button>IV
                    <Button>V
                    <Button>VI
                    <Button>xk
                </div>

                <div class="row">
                    <Button>I
                    <Button>II
                    <Button>III
                    <Button>/
                </div>

                <div class="row">
                    <Button id="zero">Nulla (0)
                    <Button>.
                    <Button>=
                </div> */}
            </main>
        );
    }
}

export default calculatorFrame;