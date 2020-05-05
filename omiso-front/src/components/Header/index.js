// == Import npm
import React from 'react';

// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './style.scss';

// == Composant
const Header = ({ userIsLogged }) => (
  <div className="header">
    <div className="headerContainer">

      <Nav userIsLogged={userIsLogged} />
      {/* <button className="button mx-auto d-block margin-top-2" type="button">Commander maintenant</button> */}
      <Link
        className="button mx-auto d-block margin-top-2"
        to="/carte"
      >Commander maintenant
      </Link>

    </div>
  </div>
);


// == Export
export default Header;
