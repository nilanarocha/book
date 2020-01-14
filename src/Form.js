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
  render() {
    const { name, book, price } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={name} />

        <label htmlFor="book">book</label>

        <input id="book" type="text" name="book" value={book} />

        <label htmlFor="price">price</label>
        <input id="price" type="text" name="price" value={price} />
      </form>
    );
  }
}

export default Form;
