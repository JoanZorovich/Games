import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo_home.gif';
import Findgames from '../../img/find_games.gif'
import CreateGame from '../../img/create_game.gif';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav id="navbar">
      <NavLink exact to='/'>
        <span className="navbar-brand">
          <img id="logoJuegos" src={Logo} overflow="hidden" height="140vh" className="logoVideoGames" alt="" />
        </span>
      </NavLink>
      <NavLink exact to='/videogames'>
        <span className="navbar-brand">
          <img id="Browse" src={Findgames} overflow="hidden" height="140vh" className="logoVideoGames" alt="" />
        </span>
      </NavLink>
      <NavLink exact to='/addVideogame'>
        <span className="navbar-brand">
          <img id="Create" src={CreateGame} overflow="hidden" height="140vh" className="logoVideoGames" alt="" />
        </span>
      </NavLink>

    </nav>
  )
}