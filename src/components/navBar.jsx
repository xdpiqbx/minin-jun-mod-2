import React from 'react';
const NavBar = ({ totalItems }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled position-relative"
          href="/"
          tabIndex="-1"
          ariaDisabled="true"
        >
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span class="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
