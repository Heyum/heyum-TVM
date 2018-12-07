// Imports
import { actionCreators as ChoosingItemsActions } from "./choosingItems";
import { actionCreators as ChoosingCycleActions } from "./choosingCycle";

// Actions

const CHOOSE_VENDINGMACHINE = "CHOOSE_VENDINGMACHINE";
const SET_VENDINGMACHINES = "SET_VENDINGMACHINES";
const RESET = "RESET";


// Action Creators

function chooseVendingMachine(item) {
      return {
            type: CHOOSE_VENDINGMACHINE,
            choosedVendingMachine: JSON.parse(JSON.stringify(item))
      };
}

function getVendingMachines() {
      return (dispatch, getState) => {
            fetch('http://18.222.158.114:3210/vmList')
                  .then(response => {
                        if(response.status == 401) {
                              alert('fuck error');
                        }
                        console.log("getFeeds ", response);
                        return response.json();
                  })
                  .then(json => {
                        dispatch(setVendingMachines(json));
                  })
      }
}

function setVendingMachines(feeds) {
      return {
            type: SET_VENDINGMACHINES,
            vendingMachines: feeds
      };
}

function resetByVMChoice() {
      return (dispatch, getState) =>  {
            const { choosingItems: { buyingLists } } = getState();
            const { choosingItems: { totalAmount } } = getState();
            const { choosingCycle: { choosedCycle } } = getState();

            const tempBuyingLists = JSON.parse(JSON.stringify(buyingLists));
            const tempTotalAmount = JSON.parse(JSON.stringify(totalAmount));
            const tempChoosedCycle = JSON.parse(JSON.stringify(choosedCycle));

            tempBuyingLists.splice(0, tempBuyingLists.length);
            tempTotalAmount.price = 0;
            tempChoosedCycle.name = null;

            dispatch(ChoosingItemsActions.setResetByVMChoice(tempBuyingLists));
            dispatch(ChoosingCycleActions.setResetCycle(tempChoosedCycle));
            dispatch(ChoosingItemsActions.setTotalAmount(tempTotalAmount));
      }
}


function reset() {
      return {
            type: RESET
      };
}

// Initial State

const initialState = { } 

// Reducer

function reducer(state = initialState, action) {
      switch(action.type) {
            default:
                  return state;
            case CHOOSE_VENDINGMACHINE:
                  return applyChooseVendingMachine(state, action);    
            case SET_VENDINGMACHINES:
                  return applySetVendingMachines(state, action);
            case RESET:
                  return initialState;
      }
}


const applyChooseVendingMachine = (state, action) => {
      const { choosedVendingMachine } = action;
      return {
            ...state,
            choosedVendingMachine
      };
}

const applySetVendingMachines = (state, action) => {
      const { vendingMachines } = action;
      return {
            ...state,
            vendingMachines
      };
}


// Exports
const actionCreators = {
        chooseVendingMachine,
        getVendingMachines,
        resetByVMChoice,
        reset
};

export { actionCreators };

export default reducer;