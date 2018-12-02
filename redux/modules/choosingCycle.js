// Imports


// Actions

const CHOOSE_CYCLE = "CHOOSE_CYCLE";
const SET_CYCLES = "SET_CYCLES";
const SET_RESET_CYCLE = "SET_RESET_CYCLE";
const RESET = "RESET";


// Action Creators

function chooseCycle(item) {
      return {
            type: CHOOSE_CYCLE,
            choosedCycle: JSON.parse(JSON.stringify(item))
      };
}

function setCycles() {
      return {
            type: SET_CYCLES,
            cycles: [
                    {
                        id: 0,
                        name: 'CYCLE (1): 9시 ~ 12시',
                    },
                    {
                        id: 1,
                        name: 'CYCLE (2): 12시 ~ 15시',
                    },
                    {
                        id: 2,
                        name: 'CYCLE (3): 15시 ~ 18시',
                    },
                    {
                        id: 3,
                        name: 'CYCLE (4): 18시 ~ 21시',
                    }
            ]
      };
}

function setResetCycle(choosedCycle) {
      return {
            type: SET_RESET_CYCLE,
            choosedCycle
      };
}

function reset() {
      return {
            type: RESET
      };
}

// Initial State

const initialState = { 
      choosedCycle: { }
} 

// Reducer

function reducer(state = initialState, action) {
      switch(action.type) {
            default:
                  return state;
            case CHOOSE_CYCLE:
                  return applyChooseCycle(state, action);    
            case SET_CYCLES:
                  return applySetCycles(state, action);
            case SET_RESET_CYCLE:
                  return applySetResetCycle(state, action);
            case RESET:
                  return initialState;
      }
}

const applyChooseCycle = (state, action) => {
      const { choosedCycle } = action;
      return {
            ...state,
            choosedCycle
      };
}

const applySetCycles = (state, action) => {
      const { cycles } = action;
      return {
            ...state,
            cycles
      };
}

const applySetResetCycle = (state, action) => {
      const { choosedCycle } = action;
      return {
            ...state,
            choosedCycle
      };
}

// Exports
const actionCreators = {
        chooseCycle,
        setCycles,
        setResetCycle,
        reset
};

export { actionCreators };

export default reducer;