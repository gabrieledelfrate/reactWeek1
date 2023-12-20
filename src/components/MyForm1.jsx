import React from "react";

class MyForm1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({nome: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`è stato inserito un nome: ${this.state.nome}`);
        document.getElementById('nome').innerHTML = `Nome inserito: ${this.state.nome}`;
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
                <button type="submit" id="submit">INVIA</button>
                </form>
                <h3 id="nomeScritto"></h3>
            </>
        )
    }
}

export default MyForm1;