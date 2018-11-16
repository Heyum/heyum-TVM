import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import BuyingList from "../../components/BuyingList"
import BuyNow from "../../components/BuyNow"
import Time from "../../components/Time"
import VendingMachine from "../../components/VendingMachine"

export default class HomeScreen extends React.Component {
    render() {
        return(
          <View style={styles.container}>
              <StatusBar />
              <Text style={styles.VendingMachine}> VendingMachine</Text>
              <VendingMachine />
              <Text>  Buying List </Text>
              <BuyingList />
              <Text>  Time </Text>
              <Time />
              <Text>  Buy Now </Text>
              <BuyNow />
          </View>  
      );
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'HOME',
        };
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5E1A5',
        flexDirection: 'column',
    },
    VendingMachine: {
        marginTop: 20
    }
})