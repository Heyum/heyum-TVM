import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, Platform } from 'react-native';
import PropTypes from "prop-types";
import Item from "../Items/Cycle/ChoosedCycleItem"

const { height, width } = Dimensions.get("window");

class Cycle extends Component{
    static propTypes = {
        choosedCycle: PropTypes.object,
    };

    render(){
        return(
            <View style={styles.list}>
                {
                    this.props.choosedCycle ? 
                    <Item key={this.props.choosedCycle.id} {...this.props.choosedCycle} />
                    : null
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    list:{
        backgroundColor: "white",
        borderRadius: 10,
        width: 300,
        height: 50,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset:{
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    }
});
  

export default Cycle;