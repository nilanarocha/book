import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';

import Form from './Form';

class App extends Component {
  state = {
    authors: [
      {
        name: 'Lucia',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Nilza',
        book: 'DevOps',
        price: '1000'
      },
      {
        name: 'Nilana',
        book: 'Java',
        price: '1000'
      },
      {
        name: 'Junior',
        book: 'Design',
        price: '1000'
      }
    ]
  };

  deleteAuthor = index => {
    const { authors } = this.state;
    this.setState({
      authors: authors.filter((author, currentPostion) => {
        return currentPostion !== index;
      })
    });
  };

  render() {
    return (
      <Fragment>
        <Tabela authors={this.state.authors} deleteAuthor={this.deleteAuthor} />
        <Form />
      </Fragment>
    );
  }
}

export default App;
