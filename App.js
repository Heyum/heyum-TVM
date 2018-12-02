import React from 'react';
import RootNavigation from "./navigation/RootNavigation"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./redux/configureStore";
const { persistor, store } = configureStore();

export default class App extends React.Component {
    render() {
        return(
            <Provider store = {store}>
                <PersistGate persistor = {persistor}>
                    <RootNavigation />
                </PersistGate>
            </ Provider>
        );
    }
}