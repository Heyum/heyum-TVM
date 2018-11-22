// Imports


// Actions

const CHOOSE_ITEM = "CHOOSE_ITEM";
const GET_FEEDS = "GET_FEEDS";
const RESET = "RESET";


// Action Creators

const feeds = [
      {
            id: 0,
            name: '콜라',
      },
      {
            id: 1,
            name: '사이다',
      },
      {
            id: 2,
            name: '삼각김밥',
      },
      {
            id: 3,
            name: '물',
      }
]

const buyingLists = [
]

function chooseItem(item) {
      buyingLists.push(item);
      console.log(buyingLists);
      return {
            type: CHOOSE_ITEM,
            buyingLists
      };
}

function getFeeds() {
      return {
            type: GET_FEEDS,
            feeds
      };
}

function reset() {
      return {
            type: RESET,
      };
}

// Initial State

const initialState = { } 
// initialState -> 유저가 앱을 처음 인스톨하고, 처음 로그일할때의 화면! 페이지 새로고침 할때마다, 모든 state는 무효가 되고 initialState를 얻음

// Reducer

function reducer(state = initialState, action) {
      switch(action.type) {
            default:
                  return state;
            case CHOOSE_ITEM:
                  return applyChooseItem(state, action);
            case GET_FEEDS:
                  return applyGetFeeds(state, action);
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

const applyGetFeeds = (state, action) => {
      const { feeds } = action;
      return {
            ...state,
            feeds
      };
}

// Exports
const actionCreators = {
      chooseItem,
      getFeeds,
      reset
};

export { actionCreators };

export default reducer;