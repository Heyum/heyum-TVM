import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Platform, ScrollView  } from 'react-native';
import Button from "../Button";
import PropTypes from "prop-types";
import { withNavigation } from 'react-navigation';
import Item from "../Items"

const { height, width } = Dimensions.get("window");

class BuyingList extends Component{
    static propTypes = {
        buyingLists: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    };

    render(){
        const { buyingLists } = this.props;

        return(
            <View style={styles.BL}>
                <View style={styles.list}>  
                    <ScrollView contentContainerStyle={styles.feeds}>
                        {
                            buyingLists ? 
                                buyingLists.map(item => (
                                    <Item key={item.id} {...item}/>
                                )) 
                             : null
                        }
                    </ScrollView>
                </View>
                <View style={styles.button}>
                    <Button iconName="shopping-cart" onPress={() => this.props.navigation.navigate('ChoosingItem')} ></Button>   
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