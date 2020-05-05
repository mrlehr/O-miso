import { SELECT_ORDER, HANDLE_SWITCH_CHANGE, RECEIVE_ORDER_SUCCESS,SEND_ORDERS, HANDLE_STATUS_ORDER } from '../actions';

const initialState = {
  selectStatusOrder: true,
  selectOrderId: 1,
  list:[]/* [
    {
      id: 16,
      status: true,
      comments: 'Sans arachides',
      client: {
        id: 1,
        email: 'tagazou@hotmail.com',
        lastname: 'Pirret',
        firstname: 'Poulet',
        phone_number: '064800072',
        address: '19 rue Babare',
        postal_code: '31000',
        city: 'Toue',
      },
      orderProducts: [
        {
          id: 24,
          quantity: 4,
          product: {
            id: 1,
            name: 'Maki saumon',
            description: null,
            image: '...',
            price: 4.5,
            category: 'Plat',
            status: true,
          },
        },
        {
          id: 21,
          quantity: 10,
          product: {
            id: 1,
            name: 'Maki ',
            description: null,
            image: '...',
            price: 5.5,
            category: 'Plat',
            status: true,
          },
        },
      ],
    },
    {
      id: 13,
      status: true,
      comments: 'Sans arachides',
      client: {
        id: 1,
        email: 'tagazou@hotmail.com',
        lastname: 'Pierrot',
        firstname: 'Poulvord',
        phone_number: '0648550872',
        address: '19 rue Babare',
        postal_code: '31000',
        city: 'Toulouse',
      },
      orderProducts: [
        {
          id: 24,
          quantity: 4,
          product: {
            id: 1,
            name: 'Maki saumon',
            description: null,
            image: '...',
            price: 4.5,
            category: 'Plat',
            status: true,
          },
        },
      ],
    },

  ],


   [
    {
      order: {
        toggleSwitch: false,
        id: 0,
        status: ' ',
        comments: ' ',
        total_price: 0,
        client: {
          id: 1,
          email: ' ',
          lastname: ' ',
          firstname: ' ',
          password: '',
          phoneNumber: ' ',
          address: ' ',
          postalCode: ' ',
          city: ' ',
        },
      },

      order_products: [
        {
          product: {
            id: 0,
            name: '',
            description: '',
            image: '',
            price: 0,
            category: ' ',
            status: 1,
          },
          quantity: 0,
        },
      ],
    },
    {
      order: {
        toggleSwitch: false,
        id: 13,
        status: 'En cours',
        comments: 'Sans arachides',
        total_price: 10.5,
        client: {
          id: 1,
          email: 'tagazou@hotmail.com',
          lastname: 'Pierrot',
          firstname: 'Poul',
          password:
            '$argon2id$v=19$m=65536,t=4,p=1$drDCP0O7r5r1w1uCTT3dUg$uIOyrA+zwOfVned1Jo7iar4A7ohggAUiX9+DsDJe0YA',
          phoneNumber: '0600000000',
          address: '19 rue Babare',
          postalCode: '31000',
          city: 'Toulouse',
        },
      },

      order_products: [
        {
          product: {
            id: 22,
            name: 'Sashimi',
            description: "C'est bon quand c'est cru",
            image: '...',
            price: 5,
            category: 'Entree',
            status: 1,
          },
          quantity: 4,
        },
        {
          product: {
            id: 1323,
            name: 'Cookie',
            description: "C'est bon quand c'est chaud",
            image: '...',
            price: 4,
            category: 'Dessert',
            status: 1,
          },
          quantity: 2,
        },
      ],
    },
    {
      order: {
        toggleSwitch: false,
        id: 17,
        status: 'En cours',
        comments: 'Sans arachides',
        total_price: 10.5,
        client: {
          id: 1,
          email: 'tagazou@hotmail.com',
          lastname: 'Pierrot',
          firstname: 'Pouord',
          password:
            '$argon2id$v=19$m=65536,t=4,p=1$drDCP0O7r5r1w1uCTT3dUg$uIOyrA+zwOfVned1Jo7iar4A7ohggAUiX9+DsDJe0YA',
          phoneNumber: '0600000000',
          address: '19 rue Babare',
          postalCode: '31000',
          city: 'Toulouse',
        },
      },

      order_products: [
        {
          product: {
            id: 2893,
            name: 'Sashimi',
            description: "C'est bon quand c'est cru",
            image: '...',
            price: 5,
            category: 'Entree',
            status: 1,
          },
          quantity: 4,
        },
        {
          product: {
            id: 1896,
            name: 'Cookie',
            description: "C'est bon quand c'est chaud",
            image: '...',
            price: 4,
            category: 'Dessert',
            status: 1,
          },
          quantity: 2,
        },
        {
          product: {
            id: 2785,
            name: 'Sashimi',
            description: "C'est bon quand c'est cru",
            image: '...',
            price: 5,
            category: 'Entree',
            status: 1,
          },
          quantity: 4,
        },
        {
          product: {
            id: 256,
            name: 'Sashimi',
            description: "C'est bon quand c'est cru",
            image: '...',
            price: 5,
            category: 'Entree',
            status: 1,
          },
          quantity: 4,
        },
      ],
    },
  ], */
};

const orders = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_ORDER:
      return {
        ...state,
        selectOrderId: action.payload,
      };

    case HANDLE_SWITCH_CHANGE:

      // const newstate = state.orders.list.map((e) => (e.order.id === state.orders.selectOrderId) ? ({...e, order: {...e.order, toggleSwitch: true}}) : ({...e}));

      return state;

    case RECEIVE_ORDER_SUCCESS:

      return {
        ...state,
        list: action.payload,
      }

    case SEND_ORDERS:

      return {
        ...state,
        comments: action.payload,
      };

    case HANDLE_STATUS_ORDER:
      return {
        ...state,
        selectStatusOrder: action.payload,
      };


    default:
      return state;
  }
};

export default orders;

// export const selectDetailOrderById = (state) => state.orders.list.find((e) => e.order.id === state.orders.selectOrderId);


export const selectDetailOrderById = (state) => {
  const filterById = state.orders.list.filter((e) => e.id === state.orders.selectOrderId);

  if (filterById[0] === undefined) {
    return {
      email: '',
      lastname: '',
      firstname: '',
      phoneNumber: '',
      total_price: '',
      order_products: [],

    };
  }

  return {
    email: filterById[0].client.email,
    lastname: filterById[0].client.lastname,
    firstname: filterById[0].client.firstname,
    phoneNumber: filterById[0].client.phone_number,
    total_price: filterById[0].total_price,
    order_products: filterById[0].orderProducts,
  };
};

//Archive selector 


   
  export const selectArchiveTrue = (state) => (state.list.filter((e)=> e.status ===state.selectStatusOrder));




