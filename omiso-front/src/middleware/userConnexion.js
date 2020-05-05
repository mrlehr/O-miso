import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
  USER_LOGIN,
  USER_INSCRIPTION,
  connectionSuccess,
  offModalConnexion,
  onModalConnexion,
  LOGOUT,
  CHECK_AUTHENTIFICATION,
  logoutSuccess,
  offModalInscription,
} from '../actions';


const userConnexion = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_AUTHENTIFICATION:

    

      if (localStorage.getItem('tokenOmiso') === null) {
       
      }
      else {
        const infoLogin = {
          email: jwt_decode(localStorage.getItem('tokenOmiso')).email,
          role: jwt_decode(localStorage.getItem('tokenOmiso')).Role[0],
          isAuthUser: true,
          userId: jwt_decode(localStorage.getItem('tokenOmiso')).userId,
        };
        // console.log(infoLogin);

        store.dispatch(connectionSuccess(infoLogin));
      }


      break;


    case USER_LOGIN:
      // Je veux lancer ma requête avec axios
     

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8001/api/user/login_check',
        withCredentials: true,
        data: action.payload,
      })
        .then((res) => {
          // Si succès -> dispatcher une action success
        

          const infoLogin = {
            email: jwt_decode(res.data.token).email,
            role: jwt_decode(res.data.token).Role[0],
            isAuthUser: true,
            userId: jwt_decode(res.data.token).userId,
          };
          // console.log(infoLogin);

          localStorage.setItem('tokenOmiso', res.data.token);

          store.dispatch(connectionSuccess(infoLogin));
          store.dispatch(offModalConnexion());
        })

        .catch((err) => {
          // Si error -> Dispatcher une action error
        });

      break;

    case USER_INSCRIPTION:
     
     
      // Je veux lancer ma requête avec axios
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8001/api/user/sign_up',
        withCredentials: true,
        data: action.payload,
      })
        .then((res) => {
          // Si succès -> dispatcher une action success
         
          store.dispatch(offModalInscription());
          store.dispatch(onModalConnexion())

          // store.dispatch(loginSucess(res.data.info));
        })
        .catch((err) => {
          // Si error -> Dispatcher une action error

          store.dispatch(offModalInscription());
          console.error(err);
        });

      break;

    case LOGOUT:

   
      localStorage.removeItem('tokenOmiso');
      store.dispatch(logoutSuccess());
      break;


    default:
      next(action);
  }
};

export default userConnexion;
