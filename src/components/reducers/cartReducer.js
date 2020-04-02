import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItems.find(item => action.id === item.id);
      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        };
      }
    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => item.id === action.id);
      let newItems = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: newItems,
        total: newTotal
      };
    case ADD_QUANTITY:
      let addQuantityToItem = state.items.find(item => item.id === action.id);
      addQuantityToItem.quantity += 1;
      let newTotals = state.total + addQuantityToItem.price;

      return {
        ...state,
        total: newTotals
      };
    case SUB_QUANTITY:
      let subAddedItem = state.items.find(item => item.id === action.id);

      if (subAddedItem.quantity === 1) {
        let newItems = state.addedItems.find(item => item.id !== action.id);
        let newTotalAfterSub = state.total - subAddedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotalAfterSub
        };
      } else {
        subAddedItem.quantity -= 1;
        let newTotalAfterSub = state.total - subAddedItem.price;
        return {
          ...state,
          total: newTotalAfterSub
        };
      }
    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 6
      };
    case SUB_SHIPPING:
      return {
        ...state,
        total: state.total - 6
      };
    default:
      return state;
  }
};

export default cartReducer;
