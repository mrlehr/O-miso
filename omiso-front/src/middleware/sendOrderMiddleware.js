import axios from 'axios';
import { SEND_ORDERS, onModalConnexion, receiveOrder, ARCHIVES_ORDER, fetchItems } from '../actions';
import { selectMenu, sommeCommande,} from '../reducers/etatMenu';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_ORDERS:
      const sendOrder = selectMenu(store.getState());
      const total_price = sommeCommande(store.getState());


      const orderValidate = {
        userId: store.getState().etatUser.userId,
        status: true,
        comments: action.payload,
        total_price,
        order_products: sendOrder,
      };   


      axios({
        method: 'post',
        url: 'http://127.0.0.1:8001/api/order/',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenOmiso')}`,
        },
        data: orderValidate,
      })
        .then((res) => {

          store.dispatch(fetchItems());

        })
        .catch((err) => {
          
          store.dispatch(onModalConnexion());
          // store.dispatch(onModalConnexion());
        });

      break;


    case ARCHIVES_ORDER:
      // preparation pour envois de commande en attente back pour route

      //console.log("ci-dessous le liens envoyer au serveur pour archiver la commande")
     // console.log(`http://127.0.0.1:8001/api/order/ ${action.payload} `);

      axios({
        method: 'put',
        url: `http://127.0.0.1:8001/api/order/edit/${action.payload}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenOmiso')}`,
        },        
      })
        .then((res) => {         
          store.dispatch(receiveOrder());
        })
        .catch((err) => {
          // store.dispatch(onModalConnexion());
        });


      break;

    default:
      next(action);
  }
};
