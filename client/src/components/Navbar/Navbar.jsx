import React, { useState } from 'react';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <img src={images.logo} alt='app logo' />
      </div>
      <h1 className='navbar__title flex__center'>uTask&nbsp;<span>2.0</span></h1>
      <div className='navbar__menu'>
        <img src={images.config} alt='config icon' onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <>
            <div className='menu__overlay-back' onClick={() => setToggleMenu(false)} />
            <div className='menu__container custom__card'>
              <h2>Configuração</h2>
              <div className='menu__functions'>
                <div className='menu__dark-mode'>
                  <h3>Dark Mode</h3>
                  <label className='custom__switch'>
                    <input type='checkbox' id='checkbox' />
                    <span className='custom__check'></span>
                  </label>
                </div>
                <div className='menu__background'>
                  <h3>Plano de Fundo</h3>
                </div>
                <form>
                  <div className='menu__background-form flex__center'>
                    <input type='url' id='background__url' placeholder='Url' />
                  </div>
                </form>
                <div className='menu__buttons'>
                  <input
                    type='reset'
                    value='Limpar'
                    className='menu__button-clear custom__button'
                  />
                  <input
                    type='submit'
                    value='Aplicar'
                    className='menu__button-apply custom__button'
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar;
