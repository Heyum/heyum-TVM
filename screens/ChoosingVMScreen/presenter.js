import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Item from '../../components/Items/VendingMachine/ChoosingVMScreenItem'

export default class ChoosingVMScreen extends React.Component {
    static propTypes = {
        vendingMachines: PropTypes.array,
        chooseVendingMachine: PropTypes.func.isRequired,
        resetByVMChoice: PropTypes.func.isRequired
    };

    render() {

        const { vendingMachines } = this.props;
        console.log("ChoosingVMScreen this.props");

        return(
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.feeds}>
                {
                    vendingMachines ? 
                    vendingMachines.map(item => (
                        <Item key={item.id} {...item} {...this.props}/>
                        )) 
                    : null
                }
            </ScrollView>
          </View>  
        );
    }
    /*static navigationOptions = ({ navigation }) => {
        return {
            title: '골라 골라!',
        };
    };*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5E1A5',
        flexDirection: 'column',
    },
    feeds: {
        alignItems: "center",
    }
});