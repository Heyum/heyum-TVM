import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, Platform } from 'react-native';
import Item from "../Items/TotalAmountItem"
  
class TotalAmount extends Component{

    render(){
        return(
            <View style={styles.list}>
                {
                    this.props.totalAmount.price > 0 ? 
                    <Item {...this.props} />
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
  

export default TotalAmount;