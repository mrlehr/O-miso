import { connect } from 'react-redux';
import Commandes from '../components/SectionMenu/Commandes';
import { choixMenu, increment, decrement, sendOrders } from '../actions';
import { selectMenu, sommeCommande } from '../reducers/etatMenu';


const mapStateToProps = (state) =>
// console.log(state.datasMenus.list.filter((d) => d.category === 'Entree'));
// console.log(state.etatMenu.choixMenu);
// console.log(categoryList(state));

  ({
    list: selectMenu(state),
    sommeCommande: sommeCommande(state),

  });


const mapDispatchToProps = (dispatch) => ({

  validationOrder: () => {
    dispatch(sendOrders());
  },

  clicMenu: (payload) => {
    dispatch(decrement(payload));
  },

 

});


export default connect(mapStateToProps, mapDispatchToProps)(Commandes);
