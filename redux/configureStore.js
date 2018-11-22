import { combineReducers, applyMiddleware, createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist"; // 디스크에 스토어를 저장
import storage from "redux-persist/lib/storage"; // redux-persist 방식 중에 async를 선택하겠다!
import thunk from "redux-thunk";
import choosingItems from "./modules/choosingItems"

const middlewares = [ thunk ];

const persistConfig = {
    key: "root", // 데이터베이스를 접근할 수 있도록 키를 생성
    storage: storage
    // blacklist: ["modules..."] -> persist할 reducer를 선택가능!
};

const rootReducer = combineReducers({choosingItems});

const reducer = persistReducer(persistConfig, rootReducer);

const configureStore = ()  => {
    let store = createStore(reducer, applyMiddleware(...middlewares))
    let persistor = persistStore(store);
    return { store, persistor }
};

export default configureStore;