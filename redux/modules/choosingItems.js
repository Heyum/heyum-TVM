// Imports


// Actions

const CHOOSE_ITEM = "CHOOSE_ITEM";
const SET_FEEDS = "SET_FEEDS";
const RESET = "RESET";


// Action Creators

const buyingLists = [
]

function chooseItem(item) {
      buyingLists.push(item);
      return {
            type: CHOOSE_ITEM,
            buyingLists: JSON.parse(JSON.stringify(buyingLists))
      };
}

function setFeeds() {
      return {
            type: SET_FEEDS,
            feeds: [
                  {
                        id: 0,
                        name: '콜라',
                  },
                  {
                        id: 1,
                        name: '사이다',
                  }
            ]
      };
}

function reset() {
      return {
            type: RESET,
      };
}

// Initial State

const initialState = { } 

// Reducer

function reducer(state = initialState, action) {
      switch(action.type) {
            default:
                  return state;
            case CHOOSE_ITEM:
                  // console.log(buyingLists === action.buyingLists); -> false 
                  return applyChooseItem(state, action);    
            case SET_FEEDS:
                  return applySetFeeds(state, action);
            case RESET:
                  return initialState;
      }
}

const applyChooseItem = (state, action) => {
      const { buyingLists } = action;
      return {
            ...state,
            buyingLists
      };
}

const applySetFeeds = (state, action) => {
      const { feeds } = action;
      return {
            ...state,
            feeds
      };
}

// Exports
const actionCreators = {
      chooseItem,
      setFeeds,
      reset
};

export { actionCreators };

export default reducer;