import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Authors</th>
        <th>Books</th>
        <th>Prices</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.authors.map((rows, index) => {
    return (
      <tr key={index}>
        <td>{rows.name}</td>
        <td>{rows.book}</td>
        <td>{rows.price}</td>
        <td>
          <button
            className="waves-effect waves-light btn  deep-orange lighten-2"
            onClick={() => {
              props.deleteAuthor(index);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};
class Tabela extends Component {
  render() {
    const { authors, deleteAuthor } = this.props;

    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody authors={authors} deleteAuthor={deleteAuthor} />
      </table>
    );
  }
}

export default Tabela;
