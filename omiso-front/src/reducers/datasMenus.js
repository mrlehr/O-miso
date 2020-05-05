import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  INCREMENT_ORDER,
  DECREMENT_MENU,
} from '../actions';
// import datatest from '../components/datatest/datatest';

const initialState = {
  list: [],
  /* {
  id: 1,
  name: 'Crabe à carapace molle',
  description: 'Crabe frit avec sauce ponzu',
  image: '#',
  price: 3,
  category: 'Plat',
  status: true,
  quantity:0,
},
{
  id: 2,
  name: 'Champignon',
  description: 'Champignon cuit en profondeur, concombre, avocat, garni de sauce Unagi',
  image: '#',
  price: 4,
  category: 'Plat',
  status: true,
  quantity:0,
},
{
  id: 3,
  name: 'Blood Orange Horizon',
  description: 'Ketel 1 Citroen Vodka, St. Germain, Lemon Juice',
  image: '#',
  price: 15,
  category: 'Boisson',
  status: true,
  quantity:0,
},
{
  id: 4,
  name: 'Sushi Combination A',
  description: '7pc Nigiri & California roll 6pc servi avec soupe miso',
  image: '#',
  price: 2,
  category: 'Entree',
  status: false,
  quantity:0,
},
{
  id: 5,
  name: 'Sunomono',
  description: 'Salade de vinaigre sucré au concombre et aux algues. Votre choix de crabe, crevette ou poulpe',
  image: '#',
  price: 8,
  category: 'Plat',
  status: true,
},
{
  id: 6,
  name: 'Super Dragon',
  description: 'Rouleau de Californie garni anguille de rivière et de sauce Unagi',
  image: '#',
  price: 15,
  category: 'Plat',
  status: true,
  quantity:0,
},
{
  id: 7,
  name: 'Tornade rouge',
  description: 'Krab Tempura, avocat et concombre; Garni de salade de crevettes épicées et de crabe',
  image: '#',
  price: 5.5,
  category: 'Plat',
  status: true,
  quantity:0,
},
{
  id: 8,
  name: 'Crevette grillée',
  description: '8 crevettes grillées aux crevettes avec sauce teriyaki',
  image: '#',
  price: 5.5,
  category: 'Plat',
  status: true,
  quantity:0,
},
{
  id: 9,
  name: 'Blood Orange Horizon',
  description: 'Ketel 1 Citroen Vodka, St. Germain, Lemon Juice',
  image: '#',
  price: 15,
  category: 'Boisson',
  status: true,
},
{
  id: 10,
  name: 'Nikka Coffey Grain',
  description: 'Japanese whiskey aged in sherry, bourbon, and wine cask',
  image: '#',
  price: 9,
  category: 'Boisson',
  status: true,
  quantity:0,
},
{
  id: 11,
  name: 'Hakutake Ginrei Shiro',
  description: ' Sliver 100% Rice',
  image: '#',
  price: 7,
  category: 'Boisson',
  status: true,
  quantity:0,
},
{
  id: 12,
  name: 'Sapporo Lager',
  description: 'Sapporo Breweries Ltd. – Tokyo, Japan',
  image: '#',
  price: 6,
  category: 'Boisson',
  status: true,
  quantity:0,
},
{
  id: 13,
  name: 'Acqua Panna',
  description: '500ml',
  image: '#',
  price: 5,
  category: 'Boisson',
  status: true,
  quantity:0,
},
{
  id: 14,
  name: 'Sushi Combination A',
  description: '7pc Nigiri & California roll 6pc servi avec soupe miso',
  image: '#',
  category: 'Entree',
  status: false,
},
{
  id: 15,
  name: 'THON ÉPICÉ',
  description: 'Thon à la sauce épicée, mayonnaise et concombre',
  image: '#',
  price: 8.4,
  category: 'Entree',
  status: false,
},
{
  id: 16,
  name: 'ROULEAU À LA MAIN DE CRABE AU FOUR',
  description: 'Crabe, à la mayonnaise, enveloppé dans du papier de soja',
  image: '#',
  price: 7,
  category: 'Entree',
  status: false,
},
{
  id: 17,
  name: 'FUTOMAKI (ROULEAU ÉPAIS',
  description: 'Yellowtail, Takuan (radis Daikon marinés japonais), Oba (herbe japonaise)',
  image: '#',
  price: 10,
  category: 'Entree',
  status: false,
},
{
  id: 18,
  name: 'DÉGUSTATION DE SAUMON',
  description: 'Saumon à oignon, au sel marin et au jus de yuzu, saumon Aburi (saisi), saumon rouge et Ikura',
  image: '#',
  price: 21,
  category: 'Entree',
  status: false,
},
{
  id: 19,
  name: 'SUSHI KAISEKI DE SHIRO',
  description: 'Sashimi dans un bol de glace, poisson local à 3 voies, Sushi-Hassun (petit plat), soupe "Osuimono"',
  image: '#',
  price: 24,
  category: 'Entree',
  status: false,
},
{
  id: 20,
  name: 'DÉGUSTATION LOCALE',
  description: 'Thon germon, saumon, saumon rouge, panope et amaebi (crevette douce)',
  image: '#',
  price: 14.2,
  category: 'Entree',
  status: false,
},
{
  id: 21,
  name: 'MIZU SHINGEN MOCHI',
  description: 'Gelée eau japonaise servie avec kinako (poudre de haricot) et kuromitsu (sirop de cassonade)',
  image: '#',
  price: 7,
  category: 'dessert',
  status: false,
},
{
  id: 22,
  name: 'SHIROS FLAN BRULEE',
  description: 'Crème crémeuse légère de style japonais originale de Shiro avec sauce au caramel',
  image: '#',
  price: 8,
  category: 'dessert',
  status: false,
},
{
  id: 23,
  name: 'DÉGUSTATION LOCALE',
  description: 'Thon germon, saumon, saumon rouge, panope et amaebi (crevette douce)',
  image: '#',
  price: 14.2,
  category: 'dessert',
  status: false,
},
{
  id: 24,
  name: 'CRÈME GLACÉE',
  description: 'Saveur vanille, thé vert ou haricot rouge',
  image: '#',
  price: 4.22,
  category: 'dessert',
  status: false,
},
{
  id: 25,
  name: 'GLACE AU CARAMEL ET AUX AMANDES',
  description: '',
  image: '#',
  price: 1.2,
  category: 'dessert',
  status: false,
},

]
*/
};

const datasMenus = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: false,
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        list: [],
        error: true,
      };
    case INCREMENT_ORDER:
      // console.log(state.list);
      const newstate = state.list.map((item) => ((item.id === action.payload) ? ({ ...item, quantity: item.quantity + 1 }) : ({ ...item })));
      // console.log(newstate.list);
      return {
        ...state,
        list: newstate,
      };
    case DECREMENT_MENU:
      // console.log(state.list);
      const newdstate = state.list.map((item) => ((item.id === action.payload) ? ({ ...item, quantity: item.quantity - 1 }) : ({ ...item })));


      return {
        ...state,
        list: newdstate,
      };
    default:
      return state;
  }
};

export default datasMenus;
