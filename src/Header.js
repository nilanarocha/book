import React, { Component } from 'react';

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper blue-grey">
        <a href="#" class="brand-logo">
          Code-Book
        </a>
        <ul class="right">
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
