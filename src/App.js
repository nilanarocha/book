import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
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

  listenerOfSubmit = author => {
    this.setState({ authors: [...this.state.authors, author] });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela
            authors={this.state.authors}
            deleteAuthor={this.deleteAuthor}
          />
          <Form listenerOfSubmit={this.listenerOfSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
