import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import PropTypes from "prop-types";

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


class Item extends React.Component {

    render() {
        console.log("BuyingListItem");
        
        return(
            <Text> 
                {
                    this.props.name +  ": " + this.props.price + "원" +  " " + this.props.count + "개"
                }
            </Text>
        ); 
    }
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: "white",
        flex: 1,
        width: width - 25,
        borderRadius: 10,
        margin: 10,
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