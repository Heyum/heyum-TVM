import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import List from "../../components/BuyingList/list";

export default class BuyingListScreen extends React.Component {
    render() {
        return(
          <View style={styles.container}>
              <List />
          </View>  
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: '골라 골라!',
        };
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5E1A5',
        flexDirection: 'column',
    }
})