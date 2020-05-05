// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local Import
import Orders from './Orders';
import OrderDetails from './OrderDetails';

//= = Import style
import './style.scss';


// == Component
const OrderManagementPage = ({

  orderList, selectOrder, SelectOrderIdDetail, switchChecked, archivesOrder,handleStatusOrder,
}) => (

  <div className="container container-fluid">
    <div className="row ">
      <div className="col-12 order-management bg-light">
        <div className="  h2 text-center">Réception des commandes</div>
      </div>
      <Orders orderList={orderList} select={selectOrder} switchChecked={switchChecked} archivesOrder={archivesOrder} handleStatusOrder={handleStatusOrder}/>
      <OrderDetails SelectOrderIdDetail={SelectOrderIdDetail} />
    </div>
  </div>
);




// == Export
export default OrderManagementPage;

OrderManagementPage.propTypes = {
  orderList: PropTypes.array.isRequired,
  selectOrder: PropTypes.func.isRequired,
  SelectOrderIdDetail: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]),
};
