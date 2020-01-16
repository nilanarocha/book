import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Form extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator({
      camp: 'name',
      method: 'isEmpty'
    });

    this.stateInital = {
      name: '',
      book: '',
      price: ''
    };

    this.state = this.stateInital;
  }

  submitForm = () => {
    if (this.validator.validate(this.state)) {
      this.props.listenerOfSubmit(this.state);
      this.setState(this.stateInital);
    } else {
      console.log('bloked');
    }
  };

  listenerOfInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, book, price } = this.state;
    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="name">
              Name
            </label>
            <input
              className="validate"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.listenerOfInput}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="book">
              book
            </label>

            <input
              className="validate"
              id="book"
              type="text"
              name="book"
              value={book}
              onChange={this.listenerOfInput}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="price">
              price
            </label>
            <input
              className="validate"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={this.listenerOfInput}
            />
          </div>
        </div>
        <button
          className="waves-effect waves-light btn  deep-orange lighten-2"
          onClick={this.submitForm}
          type="button"
        >
          Salve
        </button>
      </form>
    );
  }
}

export default Form;
