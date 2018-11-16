import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import BuyingListScreen from "../screens/BuyingListScreen";

const RootNavigation = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        BuyingList: {
            screen: BuyingListScreen,
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