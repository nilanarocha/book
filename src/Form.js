import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.stateInital = {
      name: '',
      book: '',
      price: ''
    };

    this.state = this.stateInital;
  }

  listenerOfInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.listenerOfSubmit(this.state);
    this.setState(this.stateInital);
  };

  render() {
    const { name, book, price } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.listenerOfInput}
        />

        <label htmlFor="book">book</label>

        <input
          id="book"
          type="text"
          name="book"
          value={book}
          onChange={this.listenerOfInput}
        />

        <label htmlFor="price">price</label>
        <input
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={this.listenerOfInput}
        />
        <button onClick={this.submitForm} type="button">
          Salve
        </button>
      </form>
    );
  }
}

export default Form;
