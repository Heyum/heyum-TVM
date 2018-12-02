import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import PropTypes from "prop-types";

export default class ChoosingCycleScreen extends React.Component {
    static propTypes = {
        cycles: PropTypes.array,
        chooseCycle: PropTypes.func.isRequired,
    };

    render() {

        const { cycles } = this.props;
        console.log("ChoosingCycleScreen", this.props);

        return(
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.feeds}>
                {
                    cycles ? 
                    cycles.map(item => (
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
        console.log("ChoosingCycleScreenItems");
        // console.log("Item", this.key); 

        const pickedItem = {
            id: this.props.id,
            name: this.props.name
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseCycle(pickedItem); 
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