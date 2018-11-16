import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Platform  } from 'react-native';
import Button from "../Button";
import { withNavigation } from 'react-navigation';

const { height, width } = Dimensions.get("window");

class BuyingList extends Component{
    render(){
        return(
            <View style={styles.BL}>
                <View style={styles.list}>  
                    <TextInput style={styles.input} placeholder={"I want to buy"} />
                </View>
                <View style={styles.button}>
                    <Button iconName="shopping-cart" onPress={() => this.props.navigation.navigate('BuyingList')} ></Button>   
                </View> 
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    BL: {
        flex: 4,
        alignItems: "center"
    },
    list:{
        backgroundColor: "white",
        flex: 3,
        width: width - 25,
        borderRadius: 10,
        marginTop: 10,
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                chadowOpacity: 0.5,
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
    },
    button:{
        flex: 1,
        marginTop: 5
    },
    input:{
        padding: 20,
        borderBottomColor: "#bbb"
    }
});
  

export default withNavigation(BuyingList);