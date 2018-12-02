import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import PropTypes from "prop-types";

class ChoosingVMScreen extends React.Component {
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

class Item extends React.Component {

    render() {
        console.log("ChoosingVMScreenItems");

        const pickedItem = {
            id: this.props.id,
            name: this.props.name
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseVendingMachine(pickedItem); 
                    this.props.resetByVMChoice(); 
                    this.props.navigation.goBack();
                } }
            >
            </Button>
        ); 
    }
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

export default ChoosingVMScreen;