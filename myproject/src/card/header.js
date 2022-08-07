import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Header(props) {
  return (
    <header className="block row center">

      <div>
        <a href="#/cart"> <Link to='/cart'> 
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}


</Link>
        </a>{' '}

      </div>
    </header>
  );
}