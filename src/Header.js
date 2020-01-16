import React, { Component } from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <a href="#" className="brand-logo">
          Code-Book
        </a>
        <ul className="right">
          <li>
            <a href="/authors">Authors</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
