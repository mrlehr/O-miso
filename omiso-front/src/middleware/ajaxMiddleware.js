import axios from 'axios';

import {
  FETCH_ITEMS, fetchItemsSuccess, receiveOrderSuccess, RECEIVE_ORDER,
} from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ITEMS:

      axios.get('http://ec2-184-72-98-52.compute-1.amazonaws.com/projet-omiso/omiso-back/public/api/products')
        .then((res) => {
          // ajouter parametre pour commande
          const addstate = res.data.map((d) => ({ ...d, quantity: 0 }));


          store.dispatch(fetchItemsSuccess(addstate));
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          // console.log(err);
        });


    case RECEIVE_ORDER:      
      
      
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8001/api/order/',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenOmiso')}`,
        },        
      }).then((res) => {
        // ajouter parametre pour commande
    
        store.dispatch(receiveOrderSuccess(res.data));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        // console.log(err);
      }); 


      break;
    default:
      next(action);
  }
};
