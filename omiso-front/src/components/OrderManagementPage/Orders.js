// == Import
import React from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

//= = Import style
import './style.scss';

// == Component
const Orders = ({
  orderList, select, switchChecked, archivesOrder, handleStatusOrder}) => {



  return(
  <div className=" col-12 col-sm-6 bg-white">
    <div className="  h2 order-title text-center">Commandes</div>
    <ul className=" row">
          <li className="col-6">
            <button className="button-items" type="button" onClick={()=>(handleStatusOrder(true))}>
              En cours

            </button>
          </li>
          <li className="col-6">
            <button className="button-items " type="button" onClick= {()=>(handleStatusOrder(false))}>
              Archivée
            </button>
          </li>
          </ul>
    <div className="lists ">
      {orderList.map((order) => (
        <div
          className="list border border-dange "
          key={uuidv4()}
          onClick={() => (select(order.id))}
        >
          <div className=" order text-left justify-content-around row ">
            {`${order.client.firstname}  ${order.client.lastname}`}
            <p className="col-1">{order.id}</p>

            <div className="minus col-1 ">
              <FaArchive onClick={() => (archivesOrder(order.id))} />
            </div>

           
          </div>
        </div>
      ))}


    </div>
  </div>
)};

// == Export
export default Orders;

Orders.propTypes = {

  orderList: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,

};
