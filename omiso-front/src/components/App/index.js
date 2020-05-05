// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// == Import
import Footer from '../Footer';
import PageNotFound from '../PageNotFound';
import Header from '../Header';
import Main from '../Main';
import SectionMenu from '../../containers/SectionMenu';
import Inscription from '../Modal/Inscription';
import Connexion from '../Modal/Connexion';
import OrderValidation from '../Modal/OrderValidation';
import OrderManagementPage from '../../containers/OrderManagementPage';
// import { fetchItems, receiveOrder, checkAuthentification } from '../../actions/index';

// == Import Style
import './styles.scss';

// commande recuperation API
// == Import npm
const App = ({
  fetchItems,
  offModalConnexion,
  onModalInscription,
  offModalInscription,
  onModalConnexion,
  offModalOrder,
  userLogin,
  userInscription,
  showModal,
  userIsLogged,
  receiveOrder,
  checkAuthentification,
  sendOrders,
}) => {
  useEffect(fetchItems, []);
  useEffect(receiveOrder,[]);
  useEffect(checkAuthentification, []);


  // const clientLog =
  //  userIsLogged.Role === "ROLE_CLIENT" && userIsLogged.isAuthUser;
  // const employeeLog = userIsLogged.Role === "ROLE_EMPLOYEE" && !userIsLogged.isAuthUser;

  // console.log(clientLog, employeeLog);

  // const redirection = () => {
  //   if (clientLog)
  // if(clientLog){console.log("je suis dans le if")}
  //     return <Redirect to ='/carte' />
  // }
  //     return <Redirect to ='/employee' />

  // systeme de route affichage


  return (
    <div className="app">
      <Header userIsLogged={userIsLogged.isAuthUser} />
      <Inscription
        showModal={showModal.showModalInscription}
        offModalInscription={offModalInscription}
        userInscription={userInscription}
      />
      <Connexion
        showModal={showModal.showModalConnexion}
        offModalConnexion={offModalConnexion}
        onModalInscription={onModalInscription}
        userLogin={userLogin}
      />


      {!userIsLogged.isAuthUser && (<Main />)}

      {userIsLogged.isAuthUser ? (
        userIsLogged.role === 'ROLE_EMPLOYEE' ? (
          <OrderManagementPage />
        ) : (
          <SectionMenu />
        )
      ) : (

        <SectionMenu />

      )}

      <OrderValidation showModal={showModal.showModalOrder} offModalOrder={offModalOrder} sendOrders={sendOrders} />
      {/* <Switch>
      <Route exact path="/" >
        { userIsLogged ? <Redirect to ="/employee" : <main /> }
      <Route />
      <Route exact path="/carte" component={SectionMenu} />
      <Route exact path="/employee" component={OrderManagementPage} />
      <Route component={PageNotFound} />

      </Switch > */}


      <Footer />
    </div>
  );
};

App.propsTypes = {
  fetchItems: PropTypes.func.isRequired,
  offModalConnexion: PropTypes.func.isRequired,
  onModalInscription: PropTypes.func.isRequired,
  offModalInscription: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  receiveOrder: PropTypes.func.isRequired,
  userInscription: PropTypes.func.isRequired,
  showModal: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ]),
};

// == Export
export default App;
