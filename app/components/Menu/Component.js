/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import { history } from '../../utils/history';

const Menu = ({ menu }) => {
  useEffect(() => {
    document.getElementsByClassName('menu-mobile')[0].style.width = '0px';
    document.getElementById('open-btn').addEventListener('click', openMenu);
    document.getElementById('close-btn').addEventListener('click', closeMenu);
    return () => {
      document
        .getElementById('open-btn')
        .removeEventListener('click', openMenu);
      document
        .getElementById('close-btn')
        .removeEventListener('click', closeMenu);
    };
  });

  const openMenu = e => {
    e.preventDefault();
    document.getElementsByClassName('menu-mobile')[0].style.width = '150px';
  };
  const closeMenu = e => {
    e.preventDefault();
    document.getElementsByClassName('menu-mobile')[0].style.width = '0px';
  };
  return (
    <Router history={history}>
      <nav className="menu">
        <ul>
          {_.map(menu, item => (
            <li key={_.uniqueId()}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="menu-collapse">
        <ul>
          <li>
            <a href="#" id="open-btn">
              n
            </a>
          </li>
        </ul>
      </nav>

      <nav className="menu-mobile">
        <ul>
          <li>
            <a id="close-btn" href="#">
              X
            </a>
          </li>
          {_.map(menu, item => (
            <li key={_.uniqueId()}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default Menu;
