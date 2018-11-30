import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ChoosingItemScreen from "../screens/ChoosingItemScreen";
import ChoosingVMScreen from "../screens/ChoosingVMScreen";
import ChoosingCycleScreen from "../screens/ChoosingCycleScreen";

const RootNavigation = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'HOME',
            }),
        },
        ChoosingItem: {
            screen: ChoosingItemScreen,
            navigationOptions: () => ({
                title: '골라 골라!',
            }),
        },
        ChoosingVendingMachine: {
            screen: ChoosingVMScreen,
            navigationOptions: () => ({
                title: 'Vending Machine!',
            }),
        },
        ChoosingCycle: {
            screen: ChoosingCycleScreen,
            navigationOptions: () => ({
                title: 'Cycles!',
            }),
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DDDDFF',
            },
            headerTintColor: '#333333',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default RootNavigation;