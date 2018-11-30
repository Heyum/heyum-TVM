// Imports


// Actions

const CHOOSE_ITEM = "CHOOSE_ITEM";
const SET_FEEDS = "SET_FEEDS";
const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";
const RESET_BY_VM_CHOICE = "RESET_BY_VM_CHOICE";
const RESET = "RESET";

// Action Creators

function chooseItem(item) {
      return (dispatch, getState) =>  {
            const { choosingItems: { buyingLists } } = getState();
            const { choosingItems: { totalAmount } } = getState();
            console.log("totalAmount", totalAmount);
            if(buyingLists) {
                  let number = buyingLists.findIndex(obj => obj.id === item.id);
                  if(number === -1) {
                        buyingLists.push(item);
                        totalAmount.price += item.price;
                  //      console.log(buyingLists);
                  } else {
                        buyingLists[number].count += 1;
                        totalAmount.price += item.price;
                  //      console.log(buyingLists);
                  }
            } else {
                  buyingLists.push(item);
                  totalAmount.price += item.price;
            }
            dispatch(setChoosedItem(buyingLists));
            dispatch(setTotalAmount(totalAmount));
      }
}

function setChoosedItem(buyingLists) {
      return {
            type: CHOOSE_ITEM,
            buyingLists: JSON.parse(JSON.stringify(buyingLists))
      };
}

function setTotalAmount(totalAmount) {
      return {
            type: SET_TOTAL_AMOUNT,
            totalAmount: JSON.parse(JSON.stringify(totalAmount))
      };
}

function setFeeds() {
      return {
            type: SET_FEEDS,
            feeds: [
                  {
                        id: 0,
                        name: '콜라',
                        price: 1000,
                        count: 1
                  },
                  {
                        id: 1,
                        name: '사이다',
                        price: 1500,
                        count: 1
                  }
            ]
      };
}

function setResetByVMChoice(buyingLists) {
      return {
            type: RESET_BY_VM_CHOICE,
            buyingLists: JSON.parse(JSON.stringify(buyingLists))
      };
}

function reset() {
      return {
            type: RESET
      };
}

// Initial State

const initialState = {
      buyingLists: [ ],
      totalAmount: { }
 } 

// Reducer

function reducer(state = initialState, action) {
      switch(action.type) {
            default:
                  return state;
            case CHOOSE_ITEM:
                  return applyChooseItem(state, action);    
            case SET_FEEDS:
                  return applySetFeeds(state, action);
            case SET_TOTAL_AMOUNT:
                  return applySetTotalAmount(state, action);
            case RESET_BY_VM_CHOICE:
                  return applyResetByVMChoice(state, action);
            case RESET:
                  return initialState;             
      }
}

const applyChooseItem = (state, action) => {
      const { buyingLists } = action;
      console.log( buyingLists )
      return {
            ...state,
            buyingLists
      };
}

const applySetTotalAmount = (state, action) => {
      const { totalAmount } = action;
      console.log("BuyingList" ,totalAmount )
      return {
            ...state,
            totalAmount
      };
}

const applySetFeeds = (state, action) => {
      const { feeds } = action;
      console.log( "applySetFeeds", state );
      return {
            ...state,
            feeds
      };
}

const applyResetByVMChoice = (state, action) => {
      const { buyingLists } = action;
      // console.log( buyingLists )
      return {
            ...state,
            buyingLists
      };
}

// Exports
const actionCreators = {
      chooseItem,
      setFeeds,
      setResetByVMChoice,
      setTotalAmount,
      reset
};

export { actionCreators };

export default reducer;