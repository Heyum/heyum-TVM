import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import PropTypes from "prop-types";
import { FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

class Cycle extends Component{
    static propTypes = {
        choosedCycle: PropTypes.object,
    };

    render(){
        return(
            <TouchableOpacity style={styles.list} onPressOut={this.props.onPress}>
                <View style={styles.left}>
                    {
                        this.props.choosedCycle.name ? 
                        <Item key={this.props.choosedCycle.id} {...this.props.choosedCycle} />
                        : null
                    }
                </View>
                <FontAwesome style={styles.right} name="clock-o" size={25} color="black" />
            </TouchableOpacity>     
        );
    }
}

class Item extends React.Component {

    render() {
        console.log("ChoosedCycleItem");
        
        return(
            <Text style={styles.item} > { this.props.name } </Text>
        ); 
    }
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset:{
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 2
            }
        })
    },
    item: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    left: {
        flex: 8,
    },
    right: {
        flex : 1,
    }
});
  

export default Cycle;