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

function setVendingMachines() {
      return {
            type: SET_VENDINGMACHINES,
            vendingMachines: [
                  {
                        id: 0,
                        name: '사회과학관 3층',
                  },
                  {
                        id: 1,
                        name: '사회과학관 4층',
                  }
            ]
      };
}

function resetByVMChoice() {
      return (dispatch, getState) =>  {
            const { choosingItems: { buyingLists } } = getState();
            const { choosingItems: { totalAmount } } = getState();
            const { choosingCycle: { choosedCycle } } = getState();

            buyingLists.splice(0, buyingLists.length);
            totalAmount.price = 0;

            dispatch(ChoosingItemsActions.setResetByVMChoice(buyingLists));
            // dispatch(ChoosingCycleActions.setResetCycle(choosedCycle));
            dispatch(ChoosingItemsActions.setTotalAmount(totalAmount));
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
        setVendingMachines,
        resetByVMChoice,
        reset
};

export { actionCreators };

export default reducer;