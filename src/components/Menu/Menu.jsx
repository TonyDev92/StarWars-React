import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
import { Trans } from 'react-i18next';

const Menu = () => {


  return (
      <nav className='nav'>
        <Link className="nav__link" to="/characters"> <Trans i18nKey="description.part3">Characters</Trans> </Link>
        <Link className="nav__link" to="/organizations"> <Trans i18nKey="description.part4">Organizations</Trans> </Link>
        <Link className="nav__link" to="/timeline"><Trans i18nKey="description.part5">Timeline</Trans></Link>
      </nav>
  )
}

export default Menu;
