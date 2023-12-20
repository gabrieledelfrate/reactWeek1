import React from "react";

class MyForm2 extends React.component {
    constructor(props) {
        super(props);
        this.state = {nomeSelect: '', nomeText: ''};
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeSelect(event) {
        rhis.setState({nomeSelect: event.target.value});
    }

    handleChangeText(event) {
        this.setState({nomeText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nomeSelect === '') {
            alert('Non è stato scelto alcun nome');
            return;
        }
        document.getElementById('nome2').innerHTML = `è stato scelto il nome ${this.state.nomeSelect}`;
        if (this.state.nomeText !== '') {
            document.getElementById('nome3').innerHTML = `è stato scritto il nome ${this.state.nomeText}`;
        } else {
            document.getElementById('nome3').innerHTML = '';
        }
        
}