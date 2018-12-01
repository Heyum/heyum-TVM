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

            console.log("chooseItem test!", getState());
            
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

function getFeeds(){
      return (dispatch, getState) => {
            fetch('http://18.222.158.114:3210/saleList')
                  .then(response => {
                        if(response.status == 401) {
                              alert('fuck error');
                        }
                        console.log("getFeeds ", response);
                        return response.json();
                  })
                  .then(json => {
                        dispatch(setFeeds(json));
                  })
      }
}

function setFeeds(feeds) {
      return {
            type: SET_FEEDS,
            feeds: feeds
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
      getFeeds,
      setResetByVMChoice,
      setTotalAmount,
      reset
};

export { actionCreators };

export default reducer;