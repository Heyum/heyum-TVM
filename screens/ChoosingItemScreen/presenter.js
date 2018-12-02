import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import PropTypes from "prop-types";
import BuyingList from "../../components/BuyingList"

class ChoosingItemScreen extends React.Component {
    static propTypes = {
        feeds: PropTypes.array,
        pickItem: PropTypes.func.isRequired
    };

    render() {
        const { feeds, pickItem } = this.props;
        console.log("ChoosingItemScreen this.props", this.props.pickItem);

        return(
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.feeds}>
                {
                    feeds ? 
                    feeds.map(item => (
                    <Item key={item.product_name} {...item} pick={pickItem}/>
                    )) 
                    : null
                }
            </ScrollView>
            <BuyingList />
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
        console.log("ChoosingScreenItem");

        const pickedItem = {
            id: this.props.id,
            name: this.props.product_name,
            price: this.props.product_price,
            count: this.props.count
        } 
        
        return(
            <Button 
                title={
                    pickedItem.name +  ": " + pickedItem.price + "원"
                }
                onPress={ () => {this.props.pick(pickedItem); } }
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
        alignItems: "center"
    },
    feeds: {
        alignItems: "center",
    }
});

export default ChoosingItemScreen;