import React from 'react'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function NavBar({count}) {
  return (
    <header>
      <h1>Fake-e-commerce</h1>
      <i>
        <Link to={'/shopping-cart'}><FontAwesomeIcon icon={faShoppingCart} />{count}</Link>
        </i>

    </header>
  )
}
