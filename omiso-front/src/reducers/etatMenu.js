import { CHOIX_MENU } from '../actions';
// import datatest from '../components/datatest/datatest';

const initialState = {
  choixMenu: 'Entree',
};

const etatMenu = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHOIX_MENU:
      return {
        ...state,
        choixMenu: action.payload,
      };

    default:
      return state;
  }
};

export default etatMenu;

// choix menus avec SELECTOR

export const categoryList = (state) => state.datasMenus.list.filter((d) => d.category === state.etatMenu.choixMenu);
export const selectMenu = (state) => state.datasMenus.list.filter((d) => d.quantity > 0);
export const sommeCommande = (state) => (state.datasMenus.list.map((selection) => selection.quantity * selection.price).reduce((totale, number) => totale + number, 0).toFixed(2));
