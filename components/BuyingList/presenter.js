import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Platform, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import Item from "../Items/BuyingList/BuyingListItem"

const { height, width } = Dimensions.get("window");

class BuyingList extends Component{
    static propTypes = {
        buyingLists: PropTypes.array,
    };

    render(){
        const { buyingLists } = this.props;

        return(
            <View style={styles.list}>  
                <ScrollView contentContainerStyle={styles.feeds}>
                    {
                        buyingLists ? 
                            buyingLists.map(item => (
                                <Item key={item.id} {...item} />
                            )) 
                         : null
                    }
                </ScrollView>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
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
    feeds: {
        alignItems: "center"
    }
});
  

export default BuyingList;