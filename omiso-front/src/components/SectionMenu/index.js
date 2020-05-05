// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Commandes from '../../containers/Commande';
import Menus from '../../containers/Menus';

import './style.scss';

// == Composant
const SectionMenu = () =>
//= =State etat menu

// const [cat, setcat] = useState('Boisson');

//= = selecteur menu
// const categoryList = list.filter((d) => d.category === cat);

//= = fonction recupere event menu
// const handlecat = ((e) => (setcat(e)));


  (
    <div className="container-fluid ">
      <div className="row " id="carte">

        <Menus />
        <Commandes />

      </div>
    </div>
  );


// == Export
export default SectionMenu;
